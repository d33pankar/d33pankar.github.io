import React from 'react';
import { Command } from 'lucide-react';
import { useWorkspace } from '@/hooks/use-workspace.jsx';
export default function CommandPalette() { const { paletteOpen, setPaletteOpen, files, openFile } = useWorkspace(); if (!paletteOpen) return null; return <div className="palette-backdrop" onClick={() => setPaletteOpen(false)}><div className="command-palette" onClick={(event) => event.stopPropagation()}><div><Command size={16}/><input autoFocus placeholder="Type a command or search files" /></div>{files.map((file) => <button key={file.id} onClick={() => { openFile(file.id); setPaletteOpen(false); }}>{file.name}<span>{file.path}</span></button>)}</div></div>; }
