import { Download, FileText, RotateCcw } from "lucide-react";

export default function AppHeader({ onReset }) {
  return <header className="topbar no-print">
    <a className="brand" href="#" aria-label="Invoice Builder home"><span className="brand-mark"><FileText size={19} /></span><span>Invoice<span className="brand-light">Builder</span></span></a>
    <div className="top-actions"><span className="version">v{__APP_VERSION__}</span><button className="button button-quiet" onClick={onReset}><RotateCcw size={16} /> Reset</button><button className="button button-primary" onClick={() => window.print()}><Download size={16} /> Download PDF</button></div>
  </header>;
}