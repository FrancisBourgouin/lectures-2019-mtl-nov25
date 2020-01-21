import React from "react";
import { action } from "@storybook/addon-actions";
import Branches from "../components/Branches";

export default {
  title: "Branches",
  component: Branches
};

let branches = [
  {
    name: "fix/vuln19012020",
    commit: {
      sha: "d63a730d7adc71ee2302608266771f4924b727c7",
      url:
        "https://api.github.com/repos/FrancisBourgouin/windows-terminal-color-scheme-builder/commits/d63a730d7adc71ee2302608266771f4924b727c7"
    },
    protected: false
  },
  {
    name: "master",
    commit: {
      sha: "d63a730d7adc71ee2302608266771f4924b727c7",
      url:
        "https://api.github.com/repos/FrancisBourgouin/windows-terminal-color-scheme-builder/commits/d63a730d7adc71ee2302608266771f4924b727c7"
    },
    protected: false
  }
];

export const Empty = () => <Branches />;

export const Populated = () => {
  return <Branches branches={branches} />;
};

export const PopulatedWithEmptyArray = () => <Branches branches={[]} />;
