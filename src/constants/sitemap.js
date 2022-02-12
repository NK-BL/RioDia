
import { FaHome, FaMap, FaPhone, FaPhotoVideo } from "react-icons/fa";

const SiteMapList = [
    {
        Id: 1,
        Title: "Home",
        Description: "Home",
        Url: "/",
        ComponentName: "HomePage",
        ParentId: null,
        DisplaySequence: "10",
        IconElement: <FaHome />,
    },
    {
        Id: 2,
        Title: "Gallery",
        Description: "GalleryPage",
        Url: "Gallery",
        ComponentName: "GalleryPage",
        ParentId: null,
        DisplaySequence: "20",
        IconElement: <FaPhotoVideo />,
    },
    {
        Id: 3,
        Title: "Contact",
        Description: "ContactPage",
        Url: "Contact",
        ComponentName: "ContactPage",
        ParentId: null,
        DisplaySequence: "30",
        IconElement: <FaPhone />,
    },
    {
        Id: 3,
        Title: "Location",
        Description: "LocationPage",
        Url: "Location",
        ComponentName: "LocationPage",
        ParentId: null,
        DisplaySequence: "40",
        IconElement: <FaMap />,
    }
];

export default SiteMapList;
