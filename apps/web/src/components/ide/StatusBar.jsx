import React from 'react';
import { Bell, Check, GitBranch } from 'lucide-react';
import { useWorkspace } from '@/hooks/use-workspace.jsx';
export default function StatusBar() { const { activeFile } = useWorkspace(); return <footer className="statusbar"><div><span><GitBranch size={13}/> main*</span><span>↻</span><span>× 0 &nbsp; ⚠ 0</span></div><div><span>{activeFile.language}</span><span>UTF-8</span><span>LF</span><span>Spaces: 2</span><span><Check size={13}/></span><Bell size={13}/></div></footer>; }
