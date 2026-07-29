import React from 'react';
import { Box, Bug, Files, GitBranch, Search, Settings } from 'lucide-react';
import { useWorkspace } from '@/hooks/use-workspace.jsx';

export default function ActivityBar() {
  const { toggleSidebar } = useWorkspace();
  return <aside className="activitybar"><div><button className="activity-active" onClick={toggleSidebar} aria-label="Explorer"><Files size={21}/></button><button aria-label="Search"><Search size={20}/></button><button aria-label="Source control"><GitBranch size={20}/></button><button aria-label="Run and debug"><Bug size={20}/></button><button aria-label="Extensions"><Box size={20}/></button></div><button aria-label="Settings"><Settings size={20}/></button></aside>;
}
