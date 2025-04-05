import Header from "@/componetnts/aboutus/header";
import ComunicationPart from "@/componetnts/call/comunicationpart";
import Map from "@/componetnts/call/map";
import StayInTouch from "@/componetnts/call/stayInTouch";

function Call() {
    return (
        <div className=" w-[100vw] flex flex-col items-center">
            <Header/>
            <ComunicationPart/>
            {/* <StayInTouch/> */}
            <Map/>
        </div>
    );
}

export default Call;