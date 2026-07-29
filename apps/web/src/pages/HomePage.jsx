import React from 'react';
import { Helmet } from 'react-helmet';
import { useWorkspace } from '@/hooks/use-workspace.jsx';
import { useHotkeys } from '@/hooks/use-hotkeys.jsx';
import TitleBar from '@/components/ide/TitleBar.jsx';
import ActivityBar from '@/components/ide/ActivityBar.jsx';
import FileExplorer from '@/components/ide/FileExplorer.jsx';
import EditorTabs from '@/components/ide/EditorTabs.jsx';
import StatusBar from '@/components/ide/StatusBar.jsx';
import Terminal from '@/components/ide/Terminal.jsx';
import CommandPalette from '@/components/ide/CommandPalette.jsx';
import AboutMd from '@/components/files/AboutMd.jsx';
import ExperienceJson from '@/components/files/ExperienceJson.jsx';
import EducationYml from '@/components/files/EducationYml.jsx';
import SkillsTs from '@/components/files/SkillsTs.jsx';
import ProjectsTsx from '@/components/files/ProjectsTsx.jsx';
import BeyondMd from '@/components/files/BeyondMd.jsx';
import ContactSh from '@/components/files/ContactSh.jsx';
import ResumePdf from '@/components/files/ResumePdf.jsx';
import { cv } from '@/data/cv.js';

const sections = { about: AboutMd, experience: ExperienceJson, education: EducationYml, skills: SkillsTs, projects: ProjectsTsx, beyond: BeyondMd, contact: ContactSh, resume: ResumePdf };

export default function HomePage() {
  const { scrollerRef, openTabs } = useWorkspace();
  useHotkeys();
  return <><Helmet><title>{cv.identity.name} — {cv.identity.role}</title><meta name="description" content={`${cv.identity.name} — ${cv.identity.role}`} /></Helmet>
    <div className="ide-app"><TitleBar /><div className="ide-workspace"><ActivityBar /><FileExplorer /><main className="editor-shell"><EditorTabs /><div ref={scrollerRef} className="editor-scroll">{openTabs.map((id) => { const Section = sections[id]; return Section ? <Section key={id} /> : null; })}<div className="editor-spacer" /></div><Terminal /></main></div><StatusBar /><CommandPalette /></div>
  </>;
}
