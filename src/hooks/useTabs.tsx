import { useState } from "react";

export default function useTabs(initialTabs, allTabs) {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
}
