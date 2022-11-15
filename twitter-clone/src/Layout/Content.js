import React, { useEffect, useState } from "react";
import db from "../firebase";
import FeedList from "../Components/FeedList";
import TweetBox from "../Components/Tweetbox";
import { PopulerIcon } from "../icons/Icon";



const Content = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://global-uploads.webflow.com/6097e0eca1e875de53031ff6/6128a6efab1b0984562c0979_maxwell-nelson-taiuG8CPKAQ-unsplash-p-2000.jpeg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <divider />


      {/* Feed */}
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
