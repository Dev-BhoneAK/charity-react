import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Articles from "./screens/Articles";
import Donate from "./screens/Donate";
import Events from "./screens/Events";
import DonateDetail from "./screens/DonateDetail";
import ArticleDetail from "./screens/ArticleDetail";
import EventDetail from "./screens/EventDetail";
import NotFound from "./screens/NotFound";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/donations" element={<Donate />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donations/:donation_id" element={<DonateDetail />} />
        <Route path="/events/:event_id" element={<EventDetail />} />
        <Route path="/articles/:article_id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      `
      <Footer />
    </>
  );
}

export default App;
