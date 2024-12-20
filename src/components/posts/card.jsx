import image from "../../assets/images.png";
import Button from "../UI/button/button";
import style from "./Card.module.css";

export default function card() {
  return (
    <div className={style.card}>
      <div className="card-image">
        <img className={style.thumbnail} src={image} alt="" />
      </div>
      <div className={style.body}>
        <h3 className={style.title}>Titolo del post</h3>
        <div className={style.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          omnis illum doloremque porro sit veniam exercitationem autem animi ab
          eligendi?
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
