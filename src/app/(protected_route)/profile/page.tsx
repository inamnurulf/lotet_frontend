"use client";
import Navbar from "@/components/navbar";
import HistoryCard from "@/components/historycard";
import { IoLogOutOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import DeleteConfirmationModal from "@/components/DeletePopUp";
import { CiSquarePlus } from "react-icons/ci";
import ModalUser from "@/components/modalUser";
import axios from "axios";
import { useAuth } from "@/context/auth-context";
import { toast } from "react-toastify";


interface Seminar {
  _id: string;
  user_id: string;
  title: string;
  details: string;
  image: string;
  eventTime: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface KerjaPraktik {
  _id: string;
  title: string;
  user_id: string;
  details: string;
  image: string;
  category: string[];

}

const Profile = ({ Name_arg, Nim_arg }: any) => {

  const [isKP, setIsKP] = useState(false);
  const [display_Name, setdisplay_Name] = useState("Loading...");
  const [display_Nim, setdisplay_Nim] = useState("Loading...");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddSeminarModalOpen, setIsAddSeminarModalOpen] = useState(false);
  const [isEditSeminarModalOpen, setIsEditSeminarModalOpen] = useState(false);
  const [isAddKPModalOpen, setIsAddKPModalOpen] = useState(false);
  const [isEditKPModalOpen, setIsEditKPModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);

  const [seminar, setSeminar] = useState<any[]>([{user_id:"0",_id:"0",title: "Loading...",details:"Loading..."}]);
  const { logout, _id, authLoad, name, nim } = useAuth()


  useEffect(
    () => {
      if (!authLoad) {
        setdisplay_Nim(nim)
        setdisplay_Name(name)
        if (_id) {
          axios.get<Seminar[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}seminar/search/byUserID/${_id}`)
            .then(res => {
              setSeminar(res.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
      }
    }, [authLoad])

  const [KerjaPraktik, setKerjaPraktik] = useState<any[]>([{user_id:"0",_id:"0",title: "Loading...",details:"Loading..."}]);
  useEffect(
    () => {
      if (!authLoad) {
        if (_id) {
          axios.get<KerjaPraktik[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}kerjaPraktik/search/byUserID/${_id}`)
            .then(res => {
              setKerjaPraktik(res.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
      }
    }, [authLoad]
  )

  //Deletion-related function
  const handleDeleteSeminarSubmit = (id: number, isKP: boolean) => {
    const URL_Seminar = `${process.env.NEXT_PUBLIC_BACKEND_URL}seminar/${id}`
    const URL_KerjaPraktik = `${process.env.NEXT_PUBLIC_BACKEND_URL}kerjaPraktik/${id}`

    let API_URL = isKP ? URL_KerjaPraktik : URL_Seminar;

    console.log(API_URL)

    axios.delete(API_URL)
      .then((response) => {
        console.log(response)
        if (response.status == 200) {
          toast("Deleted!!! ✨", {
            hideProgressBar: false,
            autoClose: 2000,
            type: "warning",
            theme: "colored",
          });

          if (isKP) {
            setKerjaPraktik((prevsKP) => prevsKP.filter((KP: any) => KP._id !== id));
          } else {
            setSeminar((prevsSeminar) => prevsSeminar.filter((Seminar: any) => Seminar._id !== id));
          }
        } else {
          if (isKP) {
            console.error(`Error deleting Kerja Praktik with ID ${id}`);
          } else {
            console.error(`Error deleting Seminar with ID ${id}`);
          }
        }
      })
  }


  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };



  const openAddSeminarModal = () => {
    setIsKP(false);
    setIsAddSeminarModalOpen(true);
  }

  const confirmAddSeminar = async (card: any) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "seminar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: _id,
            title: card.name,
            details: card.details,
            image: card.image,
            eventTime: card.eventTime,
            category: card.category,
            location: card.location,
            additional: card.additional,
          }),
        }
      );

      const data = await response.json();
      toast("Data Added!!! ✨", {
        hideProgressBar: false,
        autoClose: 2000,
        type: "success",
        theme: "colored",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
    }
    setIsAddSeminarModalOpen(false);
  }

  const openEditSeminarModal = () => {
    setIsKP(false);
    setIsEditSeminarModalOpen(true);
  }

  const confirmEditSeminar = async (card: any) => {
  
    try {
      const requestBody: any = {
        user_id: _id,
      };
  
      if (card.name) {
        requestBody.title = card.name;
      }
  
      if (card.details) {
        requestBody.details = card.details;
      }
  
      if (card.image) {
        requestBody.image = card.image;
      }
  
      if (card.eventTime) {
        requestBody.eventTime = card.eventTime;
      }
  
      if (card.category) {
        requestBody.category = card.category;
      }
  
      if (card.location) {
        requestBody.location = card.location;
      }
  
      if (card.additional) {
        requestBody.additional = card.additional;
      }
  
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "seminar/" + itemToDelete,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
  
      const data = await response.json();
  
    } catch (error) {
      console.log(error);
    } finally {
      setIsEditSeminarModalOpen(false);
    }
  };
  

  const closeSeminarModal = () => {
    setIsAddSeminarModalOpen(false);
    setIsEditSeminarModalOpen(false);
  }

  const openAddKPModal = () => {
    setIsKP(true);
    setIsAddKPModalOpen(true);
  }

  const confirmAddKP = async (card: any) => {
    try {
      console.log({
        user_id: _id,
        title: card.name,
        details: card.details,
        image: card.image,
        category: card.category,
      })
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "kerjaPraktik",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: _id,
            title: card.name,
            details: card.details,
            image: card.image,
            category: card.category,
          }),
        }
      );

      const data = await response.json();
      toast("Data Added!!! ✨", {
        hideProgressBar: false,
        autoClose: 2000,
        type: "success",
        theme: "colored",
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
    }

    setIsAddKPModalOpen(false);
  }

  const confirmEditKP = async (card: any) => {
    //patch to api /
    try {
      const requestBody: any = {
        user_id: _id,
      };

      if (card.name) {
        requestBody.title = card.name;
      }

      if (card.details) {
        requestBody.details = card.details;
      }

      if (card.image) {
        requestBody.image = card.image;
      }

      if (card.category) {
        requestBody.category = card.category;
      }

      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + "kerjaPraktik/" + itemToDelete,

        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();

    } catch (error) {
      console.log(error);
    } finally {
    }
    setIsEditKPModalOpen(false);
  }

  const closeKPModal = () => {
    setIsAddKPModalOpen(false);
    setIsEditKPModalOpen(false);
  }

  const handleLogOut = () => {
    logout();
    window.location.reload();
  }

  return (
    <div className="h-screen flex flex-col bg-[#0D6FBC]">
      {/* Top part */}
      <div className="min-h-[70px] bg-blue-500">
        {/* Content for the top part */}
        <Navbar />
      </div>

      <div className="flex-row flex h-full">
        {/* Bottom part */}
        <div className="flex w-1/5 justify-between flex-col">
          {/* Left part */}
          {/* Content for the left part */}
          <div className="relative inset-x-0 top-14 mx-auto h-[75px] w-full bg-parent text-center">
            <div className="flex justify-center h-[35px] w-full  bg-parent ">
              <div className="flex items-center text-xs font-bold text-white md:text-xl">
                {display_Name}
              </div>
            </div>
            <div className="flex justify-center h-[35px] w-full  bg-parent">
              <div className="flex items-center text-xs font-bold text-white md:text-xl">
                {display_Nim}
              </div>
            </div>
          </div>
          <div>
            <hr className="w-[80%] mx-auto m-3 text-grey-300" />
            <button
              onClick={handleLogOut}
              className="inset-x-0 rounded-xl mx-auto w-[60%] bg-[#0D6FBC] flex flex-row hover:bg-[#4e9edc] mb-5">
              <IoLogOutOutline
                color="white"
                size="30px"
                className="ml-2 mt-1.5 md:max-w-1/4"
              />
              <text className="my-auto mx-auto font-bold text-xs text-white md:text-xl">
                Logout
              </text>
            </button>
          </div>
        </div>

        {/* Right part */}
        <div className="flex flex-col h-full w-full">
          {/* Right-top */}
          <div className="max-h-[90%] flex flex-row h-full w-full">
            <div className="flex-1 h-full py-3 pr-3">
              <div className="rounded-xl w-full h-full shadow-md mx-auto bg-primary p-3">
                <div className="flex items-center">
                  <h1 className="mx-1 font-bold text-white text-xl">Seminar</h1>
                  <CiSquarePlus className="mx-1 mt-1 w-[40px] h-[40px] hover:bg-[#add03f] rounded-md  text-white" onClick={openAddSeminarModal} />
                </div>
                <div className=" mx-auto p-3 max-w-full h-[31vh] overflow-y-auto scrollbar">
                  {seminar.map(item => (
                    <HistoryCard
                      key={item._id}
                      card={item}
                      handleDeleteButton={() => {
                        setItemToDelete(item._id);
                        setIsDeleteModalOpen(true);
                        setIsKP(false)
                      }}
                      handleEditButton={() => {
                        setItemToDelete(item._id);
                        setIsKP(false);
                        setIsEditSeminarModalOpen(true);
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-end mx-8"></div>
              </div>
            </div>

            {/* Right-bottom */}
            <div className="flex-1 h-full py-3 pr-3">
              <div className="rounded-xl w-full h-full shadow-md mx-auto bg-primary p-3">
                <div className="flex items-center">
                  <h1 className="mx-1 font-bold text-white text-xl">
                    Kerja Praktik
                  </h1>
                  <CiSquarePlus className="mxsetIsEditKPModalOpen-1 mt-1 w-[40px] h-[40px] hover:bg-[#add03f] rounded-md text-white" onClick={openAddKPModal} />
                </div>
                <div className="mx-auto p-3 max-w-full h-[31vh] overflow-y-auto scrollbar">
                  {KerjaPraktik.map(item => (
                    <HistoryCard
                      key={item._id}
                      card={item}
                      handleDeleteButton={() => {
                        setItemToDelete(item._id);
                        setIsDeleteModalOpen(true);
                        setIsKP(true)
                      }}
                      handleEditButton={() => {
                        setItemToDelete(item._id);
                        setIsKP(true);
                        setIsEditKPModalOpen(true);
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-end mx-8"></div>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-full min-h-[10%] mx-auto pr-3 pb-3">
            <div className="rounded-xl h-full shadow-md bg-[#add03f] flex items-center justify-center">
              <p className="text-center text-white text-sm italic">
                Warning: Pastikan anda bertanggung jawab terhadap apa yang anda
                inputkan
              </p>
            </div>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={() => {
          if (itemToDelete) {
            handleDeleteSeminarSubmit(itemToDelete, isKP);
            closeDeleteModal();
          }
        }}
      />
      <ModalUser
        isOpen={isAddSeminarModalOpen}
        isKP={isKP}
        title="Add New Seminar"
        action="Add"
        onConfirm={confirmAddSeminar}
        onClose={closeSeminarModal}
      />
      <ModalUser
        isOpen={isEditSeminarModalOpen}
        isKP={isKP}
        title="Edit Seminar"
        action="Edit"
        onConfirm={confirmEditSeminar}
        onClose={closeSeminarModal}
      />
      <ModalUser //keknya perlu ganti modal (?)
        isOpen={isAddKPModalOpen}
        isKP={isKP}
        title="Add New KP"
        action="Add"
        onConfirm={confirmAddKP}
        onClose={closeKPModal}
      />
      <ModalUser //keknya perlu ganti modal (?)
        isOpen={isEditKPModalOpen}
        isKP={isKP}
        title="Edit KP"
        action="Edit"
        onConfirm={confirmEditKP}
        onClose={closeKPModal}
      />
    </div>
  );
};

export default Profile;
