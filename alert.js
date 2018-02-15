
        var alert_div = document.createElement('div');
        alert_div.innerHTML = '<!-- Begin NWH Alerts --> <div class="status-message status-message--error body__copy" role="contentinfo"> <i class="icon icon--caution"></i> <div role="alert" class=""> <ul class="status-message__list typog-body"> <li>Whoops something is wrong</li> </ul> <div class="status-message__cta"> <a href="http://northwell.com" class="link link--cta " target="_blank" >Read More</a> </div> </div> </div> <!-- End NWH Alerts -->';
        document.getElementsByTagName('body')[0].appendChild(alert_div);
        document.body.insertBefore(alert_div, document.body.childNodes[0]);
        
        // If CSS needs to be appended to the head.
        var cssLink = document.createElement("link");
        cssLink.href = "//rob-p2.github.io/alerts/northwell_alerts.css";
        cssLink.setAttribute('rel', 'stylesheet');
        cssLink.setAttribute('type', 'text/css');
        document.head.appendChild(cssLink);
