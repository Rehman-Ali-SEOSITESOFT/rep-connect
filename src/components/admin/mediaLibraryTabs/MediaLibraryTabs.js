import React, { useRef, useEffect, useState } from "react";
import "./MediaLibraryTabs.css";
import covid from "../../../assets/images/mediaLibrary/covid-flu-22-300x300.jpg";
import womenkey from "../../../assets/images/mediaLibrary/womensKEY-provider-22-300x300.jpg";
import men from "../../../assets/images/mediaLibrary/mensKEY-provider-22-300x300.jpg";
import uroKey from "../../../assets/images/mediaLibrary/uroKEY-provider-22-300x300.jpg";
import MediaLibContent from "../mediaLibContent/MediaLibContent";
import AddNew from "@/components/admin/addNew/AddNew";
import NavTabs from "../addNew/navTabs/NavTabs";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTags } from "@/redux/slices/tagLibrary";
import { tagsDataAll } from "@/redux/slices/tagsDataAll";
const MediaLibraryTabs = () => {
  const state = useSelector((state) => state.tags);
  const [addItem, setAddItem] = useState(false);
  const dispatch = useDispatch();
  const tagss = useSelector((state) => state.tags.data);
  const tagsData = useSelector((state) => state.tagsData.data);
  const [delBtn, setDelBtn] = useState(false);
  const firstRender = useRef(true);
  const [selectedImage, setSelectedImage] = useState([]);
  const tagsLoading = useSelector((state) => state.tagsData.loading);

  const _handleAddNew = () => {
    setAddItem(true);
  };
 
  const _hndleClsosee = () => {
    setAddItem(false);
  };

  const _handleDeleteButton = () => {};
  const [tabs1, setTab1] = useState([
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
  ]);
  const [tabs2, setTabs2] = useState([
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
  ]);
  const [tabs3, setTabs3] = useState([
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: womenkey,
    },
  ]);
  const [tabsNames, setTabsNames] = useState([
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
  ]);
  const [loadMoree, setLoadMoree] = useState(30);
  const [loadMore2, setLoadMore2] = useState(6);
  const [loadMore3, setLoadMore3] = useState(6);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  let tabsNumer = tagsData.length;

  const _handleLoadMore = () => {
    if (loadMoree < tabsNumer) {
      setLoadMoree(loadMoree + 10);
      setToggleBtn(true);
    } else {
      setToggleBtn(true);
    }
    // if (loadMoree < tagsData) {
    //   setLoadMoree(loadMoree + 3);
    // }
    // setToggleBtn(true);
    // console.log(loadMoree);
  };
  // const _handleLoadMore2 = () => {
  //   if (loadMore2 < tabsNumer2) {
  //     setLoadMore2(loadMore2 + 3);
  //   }
  //   setToggleBtn(true);
  // };
  // const _handleLoadMore3 = () => {
  //   if (loadMore3 < tabsNumer3) {
  //     setLoadMore3(loadMore3 + 3);
  //   }
  //   setToggleBtn(true);
  // };
  const _handleViewLesss = () => {
    if (loadMoree > 30) {
      setLoadMoree(loadMoree - 10);
    } else {
      setLoadMoree(loadMoree);
      setToggleBtn(false);
    }
  };
  const _handleViewLess = () => {
    if (loadMore2 > 6) {
      setLoadMore2(loadMore2 - 3);
    } else {
      setLoadMore2(loadMore2);
      setToggleBtn(false);
    }
  };
  const _handleJumpLoaded = () => {
    if (loadMore3 > 6) {
      setLoadMore3(loadMore3 - 3);
    } else {
      setLoadMore3(loadMore3);
      setToggleBtn(false);
    }
    console.log(loadMore3);
  };
  const getMediaTagData = () => {
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/mediatag")
      .then((resp) => {
        setTabsNames(resp.data.data.tags);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setLoading(false);
    dispatch(getTags());
    dispatch(tagsDataAll());
  }, []);
  const _handleImageId = (id) => {
    console.log(id, "id of image");
    const selectImage = id;
    if (selectedImage.filter((item) => item === id).length > 0) {
      let arr = [...selectedImage];
      setSelectedImage(arr.filter((item) => item !== id));
    } else {
      setSelectedImage((prevImage) => [...prevImage, selectImage]);
    }
  };

  return (
    <>
      {tagsLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6 text-end">
              <div className="right mt-2">
                {selectedImage.length > 0 && (
                  <button
                    onClick={_handleDeleteButton}
                    className="addNewButton   deletebtn"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="tabs_sectons_wrapper">
            <ul
              className="nav nav-pills tabs_menu_"
              id="pills-tab"
              role="tablist"
            >
              {tagss?.map((e, idx) => {
                return (
                  <li className="nav-item" role="presentation" key={idx}>
                    <NavTabs tabName={e.name} />
                  </li>
                );
              })}
            </ul>
            <div className="tab-content tab_content" id="pills-tabContent">
              <div
                className="tab-pane fade  show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="d-flex flex-wrap position-relative image_wrapper">
                  {tagsData?.slice(0, loadMoree).map((e, idx) => {
                    return (
                      // <span key={idx}>
                      <MediaLibContent
                        image={e.image.url}
                        key={idx}
                        id={e.image.id}
                        _handleGettingId={_handleImageId}
                        selectedImage={selectedImage}
                      />
                      // </span>
                    );
                  })}
                </div>
                <div className="text-center">
                  <p className="tabs_number">
                    Showing {loadMoree} of {tabsNumer} media items
                  </p>
                  {loadMoree < tabsNumer && (
                    <button onClick={_handleLoadMore} className="loadMOre">
                      Load More
                    </button>
                  )}

                  {toggleBtn ? (
                    <button onClick={_handleViewLesss} className="viewLess_btn">
                      View Less
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MediaLibraryTabs;
