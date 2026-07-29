import React from 'react';
import { X } from 'lucide-react';
import { useWorkspace } from '@/hooks/use-workspace.jsx';

export default function EditorTabs() { const { files, openTabs, activeId, openFile, closeTab } = useWorkspace(); return <div className="editor-tabs">{openTabs.map((id) => { const file = files.find((item) => item.id === id); return <button className={id === activeId ? 'editor-tab active-tab' : 'editor-tab'} key={id} onClick={() => openFile(id)}><span className={`tab-icon tab-${file.icon}`}>{file.icon.slice(0,2).toUpperCase()}</span>{file.name}<X size={13} onClick={(event) => { event.stopPropagation(); closeTab(id); }}/></button>; })}</div>; }
