import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Meet Amazon's new boss", "3d ago • 48,396 readers")}
      {newsArticle("Massive NRI rush to buy homes", "3d ago • 8,886 readers")}
      {newsArticle("Is WFH more stressful?", "3d ago • 6,910 readers")}
    </div>
  )
}

export default Widgets

// https://www.linkedin.com/in/gaurav-singh-0b69931aa/