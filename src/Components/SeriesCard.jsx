import styles from "../Components/Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  let { img_url, name, rating, description, genre, cast, watch_url } = data;

  let btn_style = {};

  const ButtonCard = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props)=>props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
  `

  const Rating = styled.h3`
    font-size : 1.6rem;
    color : #7dcea0;
    text-transform: capitalize;
  `

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} height="40%" width="40%"></img>
      </div>
      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
        <h2>Name : {name}</h2>
        <Rating>
          Rating :
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="text-3xl font-bold underline text-cyan-300">Summary : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonCard rating={rating}>Watch Now</ButtonCard>
        </a>
      </div>
    </li>
  );
};
