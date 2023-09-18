import React from "react";
import Topic from "./Topic";

const Topics = ({ contents }) => {
  return (
    <div>
      <h2>Topics - 주제들</h2>
      <ul>
        {
        contents.map((content) => (
        //   <li key={content.id}>
        //     <div>
        //       id: {content.id} <br/>
        //       title: {content.title} <br/>
        //       desc: {content.desc} <br/><br />
        //     </div>
        //   </li>

            <li>
                <Topic Key = {content.id}
                id = {content.id}
                title = {content.title}
                desc ={content.desc} />
            </li>

        ))
        }
      </ul>
    </div>
  );
}

export default Topics;
