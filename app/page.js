import BasicInformation from "./dashboard/createmadrasaprofile/basicInformation/BasicInformation";
import ContactInformation from "./dashboard/createmadrasaprofile/contactInformation/page";
import LegalAndAdministrativeInformation from "./dashboard/createmadrasaprofile/egalAndAdministrativeInformation/page";
import FacilitiesAndServices from "./dashboard/createmadrasaprofile/facilitiesAndServices/page";
import MedicalStaffInformation from "./dashboard/createmadrasaprofile/staffInformation/page";

export default function Home() {
  return (
    <div>
      <BasicInformation />
      <ContactInformation />
      <LegalAndAdministrativeInformation />
      <FacilitiesAndServices />
      <MedicalStaffInformation />
    </div>
  );
}
