import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="mx-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillsText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%]">
          <AllSkills />
        </div>
        <div className="bottom-[50px] absolute left-[50px] ">
            <AllSkills/>
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
