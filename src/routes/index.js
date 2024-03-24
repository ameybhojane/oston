import Carrer from "../pages/Carrer";
import Creator from "../pages/Creator";
import Data from "../pages/Data";
import MentalHealth from "../pages/MentalHealth";
import Product from "../pages/Product";
import StudyAbroad from "../pages/StudyAbroad";
import Tech from "../pages/Tech";

const mainRoutes = [
  {
    path: "/",
    element: <Data />,
  },
  {
    path: "/data",
    element: <Data />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "carrer",
    element: <Carrer />,
  },
  {
    path: "creator",
    element: <Creator />,
  },
  {
    path: "mental_health",
    element: <MentalHealth />,
  },
  {
    path: "study_abroad",
    element: <StudyAbroad />,
  },
  {
    path: "tech",
    element: <Tech />,
  },
];

export default mainRoutes;
