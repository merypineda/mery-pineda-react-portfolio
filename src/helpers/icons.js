import {
    faTrash,
    faSignOutAlt,
    faEdit, 
    faMinusCircle,
    faSpinner,
    faPlusCircle,
    faAt,
    faPhoneVolume,
    faMapMarkerAlt,
    faEnvelope,
    faLock,
    faLink,
    faBookOpen
    
  

  } from "@fortawesome/free-solid-svg-icons";

  import { library } from "@fortawesome/fontawesome-svg-core";


  const Icons = () => {

    return library.add(faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusCircle, faAt,
      faPhoneVolume, faMapMarkerAlt, faEnvelope, faLock, faLink, faBookOpen);
  };

  export default Icons;