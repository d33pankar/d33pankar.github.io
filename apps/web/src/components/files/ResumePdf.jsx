import React from 'react';
import { ChevronRight, Download, FileWarning } from 'lucide-react';
import resumes from 'virtual:resume-manifest';

const latest = resumes[0] || null;

export default function ResumePdf() {
  if (!latest) {
    return (
      <section id="file-resume" className="resume-view scroll-mt-2">
        <div className="resume-empty">
          <FileWarning size={22} />
          <p>No résumé PDF found yet.</p>
          <p className="resume-empty-hint">
            Drop a <code>.pdf</code> into <code>apps/web/public/Resume/</code> and it will
            show up here automatically.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="file-resume" className="resume-view scroll-mt-2">
      <div className="resume-toolbar">
        <div className="resume-meta">
          <span>Resume</span>
          <ChevronRight size={13} className="opacity-60" />
          <span className="resume-filename">{latest.name}</span>
          <span className="resume-updated">updated {latest.updated}</span>
        </div>
        <a className="resume-download" href={latest.url} download={latest.name}>
          <Download size={18} />
          Download résumé
        </a>
      </div>
      <iframe
        className="resume-frame"
        src={`${latest.url}#view=FitH`}
        title={`Résumé — ${latest.name}`}
      />
    </section>
  );
}
