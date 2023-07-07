import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UploadfileTwo = React.lazy(() => import("pages/UploadfileTwo"));
const UploadfileOne = React.lazy(() => import("pages/UploadfileOne"));
const ChatTwo = React.lazy(() => import("pages/ChatTwo"));
const Settings = React.lazy(() => import("pages/Settings"));
const ChatOne = React.lazy(() => import("pages/ChatOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/chatone" element={<ChatOne />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chattwo" element={<ChatTwo />} />
          <Route path="/uploadfileone" element={<UploadfileOne />} />
          <Route path="/uploadfiletwo" element={<UploadfileTwo />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
