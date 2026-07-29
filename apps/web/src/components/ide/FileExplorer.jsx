import React from 'react';
import { ChevronDown, ChevronRight, FileCode2, FileText, FolderOpen, MoreHorizontal } from 'lucide-react';
import { FILES } from '@/data/cv.js';
import { useWorkspace } from '@/hooks/use-workspace.jsx';

const iconFor = (file) => {
  if (file.icon === 'md') return <FileText className="file-md" size={14}/>;
  if (file.icon === 'pdf') return <FileText className="file-pdf" size={14}/>;
  return <FileCode2 className={`file-${file.icon}`} size={14}/>;
};
export default function FileExplorer() { const { sidebarOpen, openFile, activeId } = useWorkspace(); if (!sidebarOpen) return null; return <aside className="explorer"><div className="explorer-heading">EXPLORER <MoreHorizontal size={16}/></div><div className="folder-row"><ChevronDown size={14}/><span>CV</span></div><div className="folder-row folder-src"><ChevronDown size={14}/><FolderOpen size={14}/><span>SRC</span></div><div className="file-list">{FILES.map((file) => <button key={file.id} onClick={() => openFile(file.id)} className={activeId === file.id ? 'file-selected' : ''}>{iconFor(file)}<span>{file.name}</span></button>)}</div><div className="folder-row extra"><ChevronRight size={14}/><FileText size={14}/><span>README.md</span></div><div className="folder-row extra"><ChevronRight size={14}/><FileCode2 size={14}/><span>package.json</span></div><div className="folder-row extra"><ChevronRight size={14}/><FileText size={14}/><span>LICENSE</span></div></aside>; }
