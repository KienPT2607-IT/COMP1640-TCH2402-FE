import "./cardEvent.css";
import { MoreVert } from "@material-ui/icons";
import { campaignRows } from "../../dataCampaign";
import { useState } from "react";

export default function CardEvent({ post }) {
  
  return (
    <div className="postt">
      <div className="posttWrapper">
        <div className="posttTop">
          <div className="posttTopLeft">
            <span className="posttUsername">
              {post.name}
            </span>
            {/* <span className="postLabel"></span> */}
          <span className="posttDate">Start Date: {post.start}</span>
          {/* <span className="postLabel"></span> */}
          <span className="posttDate">Final Date: {post.final}</span>
          </div>
          <div className="posttTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="posttCenter">
          
          {/* <span className="postText">{post?.desc}</span> */}
        </div>
        
        <form>
            <button
            className="btnPostt"
            alt=""
            >Detail</button>
            </form>
                    
      </div>
    </div>
  );
}