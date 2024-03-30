import axios from "axios";
import { useEffect } from "react";
import serchIcon from "../../assets/SearchIcon.png";
import { setPosts } from "../../redux/features/postSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "../../scss/index.scss";
import "../../scss/reset.scss";
import { PostType } from "../../types";
import Post from "../../ui/Post/Post";
import css from "./index.module.scss";

export default function MainPage() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const posts: PostType[] = useAppSelector((state) => state.post.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!posts[0]) {
      axios.get(apiUrl).then((resp) => {
        const newPosts = resp.data;
        newPosts.forEach((el: PostType) => {
          el.dislike = Math.floor(Math.random() * 50);
          el.like = Math.floor(Math.random() * 50);
        });
        dispatch(setPosts(newPosts));
      });
    }
  }, [dispatch, posts]);

  return (
    <div className={css.main}>
      <div className={css.blog}>
        <h1>Блог</h1>
        <p>
          Здесь мы делимся интересными кейсами из наших проектов, пишем про IT,
          а также переводим зарубежные статьи
        </p>
        <div style={{ position: "relative" }}>
          <input
            style={{ paddingLeft: "44px", width: "1080px", height: "20px" }}
            type="text"
            placeholder="Поиск по названию статьи"
          />
          <img
            style={{ position: "absolute", top: 10, left: 15 }}
            src={serchIcon}
            alt="serch-icon"
          />
        </div>

        <div className={css.mainPost}>
          <Post post={posts[0]} />
        </div>

        <div className={css.postBlocks}>
          <div className={css.block}>
            {posts.map((el, i) => {
              if (i % 2 == 0 && i !== 0) {
                return <Post key={i} post={el} />;
              }
            })}
          </div>

          <div className={css.block}>
            {posts.map((el, i) => {
              if (i % 2 !== 0) {
                return <Post key={i} post={el} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
