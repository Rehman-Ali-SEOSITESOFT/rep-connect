import React, { useRef, useEffect, useState } from "react";
import "./MediaLibraryTabs.css";
import covid from "../../../assets/images/mediaLibrary/covid-flu-22-300x300.jpg";
import womenkey from "../../../assets/images/mediaLibrary/womensKEY-provider-22-300x300.jpg";
import men from "../../../assets/images/mediaLibrary/mensKEY-provider-22-300x300.jpg";
import uroKey from "../../../assets/images/mediaLibrary/uroKEY-provider-22-300x300.jpg";
import MediaLibContent from "../mediaLibContent/MediaLibContent";

const MediaLibraryTabs = () => {
  const firstRender = useRef(true);
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
  const [loadMoree, setLoadMoree] = useState(6);
  const [loadMore2, setLoadMore2] = useState(6);
  const [loadMore3, setLoadMore3] = useState(6);
  const [toggleBtn, setToggleBtn] = useState(false);
  let tabsNumer = tabs1.length;
  let tabsNumer2 = tabs2.length;
  let tabsNumer3 = tabs3.length;
  const _handleLoadMore = () => {
    setLoadMoree(loadMoree + 3);
    setToggleBtn(true);
  };
  const _handleLoadMore2 = () => {
    setLoadMore2(loadMore2 + 3);
    setToggleBtn(true);
  };
  const _handleLoadMore3 = () => {
    setLoadMore3(loadMore3 + 3);
    setToggleBtn(true);
  };
  const _handleViewLesss = () => {
    if (loadMoree > 6) {
      setLoadMoree(loadMoree - 3);
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
  useEffect(() => {
    firstRender.current = false;
  }, [toggleBtn]);
  return (
    <>
      <ul className="nav nav-pills tabs_menu_" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active "
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Contact
          </button>
        </li>
      </ul>
      <div className="tab-content tab_content" id="pills-tabContent">
        <div
          className="tab-pane fade show active "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          {tabs1.slice(0, loadMoree).map((e, idx) => {
            return (
              <span key={idx}>
                <MediaLibContent image={e.image} />
              </span>
            );
          })}
          <div className="text-center">
            <p className="tabs_number"> Showing {tabsNumer} media items </p>
            <button onClick={_handleLoadMore} className="loadMOre">
              Load More
            </button>
            {toggleBtn ? (
              <button onClick={_handleViewLesss} className="viewLess_btn">
                View Less
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          {tabs2.slice(0, loadMore2).map((e, idx) => {
            return (
              <span key={idx}>
                <MediaLibContent image={e.image} />
              </span>
            );
          })}
          <div className="text-center">
            <p className="tabs_number">Showing {tabsNumer2} media items</p>
            <button onClick={_handleLoadMore2} className="loadMOre">
              Load More
            </button>
            {toggleBtn ? (
              <button onClick={_handleViewLess} className="viewLess_btn">
                View Less
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          {tabs3.slice(0, loadMore3).map((e, idx) => {
            return (
              <span key={idx}>
                <MediaLibContent image={e.image} />
              </span>
            );
          })}
          <div className="text-center">
            <p className="tabs_number">Showing {tabsNumer3} media items</p>
            <button onClick={_handleLoadMore3} className="loadMOre">
              Load More
            </button>
            {toggleBtn ? (
              <button onClick={_handleJumpLoaded} className="viewLess_btn">
                View Less
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaLibraryTabs;
