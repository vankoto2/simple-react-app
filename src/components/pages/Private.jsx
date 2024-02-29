import { useState, useEffect } from "react";

const Private = () => {
  const [news, setNews] = useState(null);
  const [show, setShow] = useState(false);
  const [oneNews, setOneNews] = useState({});
  const [limit, setLimit] = useState(3);
  const [newsPage, setNewsPage] = useState(1);
  const [showMore, setShowMore] = useState(true);

  const handleClick = (logo, title, date, author, description) => {
    setShow(true);
    setOneNews({
      logo,
      title,
      date,
      author,
      description,
    });
  };
  useEffect(() => {
    fetch(
      `https://ik-backend.eduproject.eu/api/all_news?perPage=4&page=1&language=en`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.data);
        setLimit(Number(data.lastPage));
      })
      .catch((error) => console.error(error));
  }, []);

  const showMoreHandler = () => {
    setNewsPage(newsPage + 1);
    if (newsPage < limit) {
      fetch(
        `https://ik-backend.eduproject.eu/api/all_news?perPage=4&page=${
          newsPage + 1
        }&language=en`
      )
        .then((response) => response.json())
        .then((data) => {
          let newNews = [];
          data.data.map((singleNews) => newNews.push(singleNews));
          setNews(news.concat(newNews));
        })
        .catch((error) => console.error(error));
    } else {
      setShowMore(false);
    }
  };

  const showLessHandler = () => {
    setNewsPage(1);
    setNews(news.slice(0, 4));
    setShowMore(true);
  };

  return (
    <div className="mx-auto">
      <div
        className="font-bold text-[60px] text-white text-center pt-10"
        id="news"
      >
        NEWS
      </div>
      {show === true && (
        <div
          id="singleNews"
          className="grid mt-20 flex items-center justify-center bg-[#0f1b30] pb-20"
        >
          <img
            src={"data:image/png;base64," + oneNews.logo}
            className="justify-self-center w-full"
          />
          <div className="text-white text-[48px] mb-4 font-thin mt-10 mx-auto w-11/12">
            {oneNews.title}
          </div>
          <div className="grid lg:grid-cols-6 mx-auto w-11/12">
            <div className="flex col-span-3">
              <div className="bg-[#2b76c5]/70 w-40 h-12 py-2 text-white text-center text-[20px] inset-x-2/4 rounded-full">
                {oneNews.date.replace(/-/g, ".")}
              </div>
              <div className="pl-4 py-2 text-white text-center text-[20px] inset-x-2/4 rounded-full flex">
                {oneNews.author}
              </div>
            </div>
          </div>
          <div className="xl:px-44 text-white text-[19px] text-justify mt-10 mx-auto w-11/12">
            {oneNews.description}
          </div>
        </div>
      )}
      <div className="text-2xl text-[#A0AEB6] mt-10 text-center grid tablet:grid-cols-4 grid-cols-1 justify-items-center">
        {news  &&
          news.map((newsData) => (
            <div href="#singleNews" key={newsData.logo}>
              <div
                role="button"
                onClick={() =>
                  handleClick(
                    newsData.logo,
                    newsData.title,
                    newsData.date,
                    newsData.author,
                    newsData.description
                  )
                }
                className="laptop:w-50 desktop:w-72 desktop:h-72 laptop:h-50 w-44 h-44 m-2 rounded-lg grid"
                key={newsData.logo}
                style={{
                  backgroundImage: `url(data:image/png;base64,${newsData.logo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="flex justify-end text-white p-2 bg-[#1C4875]/40">
                  <div className=" bg-[#2b76c5]/70 w-40 h-12 hover:text-white py-2 text-white text-center text-[20px] inset-x-2/4 place-self-start rounded-full flex items-center justify-center">
                    {newsData.date.replace(/-/g, ".")}
                  </div>
                </div>
                <div className=" text-white items-end text-left bg-[#1C4875]/40 px-2 desktop:pt-40 pt-4 text-ellipsis overflow-hidden">
                  {newsData.title}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="grid pt-20 flex items-center justify-center">
        {showMore && (
          <button
            className="outline outline-offset-[-3px] outline-[#1C4875]  bg-[#1C4875]/70 w-44 h-14 hover:text-white py-2 text-white text-center text-[20px] inset-x-2/4 place-self-start rounded-full flex items-center justify-center"
            onClick={showMoreHandler}
          >
            Show More
          </button>
        )}
        {!showMore && (
          <button
            className="outline outline-offset-[-3px] outline-[#1C4875]  bg-[#1C4875]/70 w-44 h-14 hover:text-white py-2 text-white text-center text-[20px] inset-x-2/4 place-self-start rounded-full flex items-center justify-center"
            onClick={showLessHandler}
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Private;
