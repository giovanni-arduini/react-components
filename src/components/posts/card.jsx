import image from "../../assets/images.png";
import Button from "../UI/button/button";

export default function card() {
  return (
    <div className="post-card">
      <div className="card-image">
        <img className="post-thumb" src={image} alt="" />
      </div>
      <div className="card-body">
        <h3 className="post-title">Titolo del post</h3>
        <div className="post-description">
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
