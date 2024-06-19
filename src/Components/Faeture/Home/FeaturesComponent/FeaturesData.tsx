import AreaIcon from "@/Assets/svg/AreaIcon";
import BuildingIcon from "@/Assets/svg/BuildingIcon";
import HandOverIcon from "@/Assets/svg/HandOverIcon";
import PercentageIcon from "@/Assets/svg/PercentageIcon";
import Box from "@/Components/Common/Box";

export default [
    {
        icon: <BuildingIcon className="w-12 h-12 text-primary" />,
        title: "Book with",
        subtitle: "Only 20%",
    },
    {
        icon: <PercentageIcon className="w-12 h-12 text-primary" />,
        title: "PAYMENT PLAN",
        subtitle: "Easy 70/30",
    },
    {
        icon: <HandOverIcon className="w-12 h-12 text-primary" />,
        title: "HANDOVER ON",
        subtitle: "Q2 2027",
    },
    {
        icon: <AreaIcon className="w-12 h-12 text-primary" />,
        title: "AREA STARTS FROM",
        subtitle: "700 sqmt",
    }
]