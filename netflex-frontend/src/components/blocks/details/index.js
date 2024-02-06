import { Fragment, useState } from "react";

import Aboutmovie from "./Aboutmovie";
import MoreList from "./MoreList";
// import Episodes from "./Episodes";
import ModalDialog from "@/components/layout/modalpopup";
// import Details from "./Details";
import { servermovieApi } from "@/lib/network/servermethod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import VideoContent from "./VideoContent";
const Moviedetails = ({ data, modal, setModal }) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleClose = (second) => {
    setModal(false)
    router.push(pathname)
  }

  console.log(data);


  return (
    <Fragment>

      {modal && <ModalDialog isOpen={modal} setIsOpen={setModal}>
        <div className="Moviedetails z">
          <div className="video">
            <VideoContent data={data.details} credits= {data.credits} handleClose={handleClose} />
          </div>
          <div className="contentElements">

            {/* < Episodes /> */}
            <MoreList data={data.similar} />
            <Aboutmovie data={{ details: data.details, credits: data.credits }} />
          </div>
        </div>
      </ModalDialog>}


    </Fragment>
  );
};

export default Moviedetails;





