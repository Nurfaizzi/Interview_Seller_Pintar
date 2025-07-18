"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Listarticle = () => {
  const [article, setAticle] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    handleGetAllArticle(title, content, category);
  }, []);

  const handleGetAllArticle = (dataTitle, dataContent, dataCategory) => {
    axios
      .get(
        `http://localhost:8000/list_article?title=${dataTitle}&content=${dataContent}&category=${dataCategory}`
      )
      .then((res) => {
        setAticle(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <div className="flex flex-wrap justify-center mt-5 items-center mx-auto">
{!article.length ? (
            <div className="wrap-not-found ">
              <span className="not-found-header-text">404</span>
              <span className="not-found-text">Ooops!...Page not found.</span>
            </div>
          ) : (
            article.map((articels, index) => (
             <div className="flex flex-wrap justify-center mt-10 mx-auto items-center" key={index}>
    <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full dark:bg-gray-800 overflow-hidden shadow-lg p-4 flex-col">
            <div className="flex items-center mb-3 justify-center">
                     <div className="md:shrink-0">
                  <img
                    className="h-48 w-70 object-cover md:h-full "
                    src="/hero.jpg"
                    alt="Modern building architecture"
                  />
                </div> 
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-black dark:text-gray-300 font-bold">
                    {articels.title}
                </p>
                <a className="mt-3 text-black dark:text-white inline-flex items-center">{articels.content}
                </a>
            </div>
        </div>
    </div>
    </div>
            ))
          )}
  
   
    </div>

    



      









  );
};

export default Listarticle;
