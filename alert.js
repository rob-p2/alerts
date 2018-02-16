
        var alert_div = document.createElement('div');
        alert_div.innerHTML = '<!-- Begin NWH Alerts --> <div class="status-message status-message--error status-message--link body__copy" role="contentinfo">
  <a href="www.northwell.edu" class="status-message__link"></a>
  <i class="">
    <!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->
    <svg width="512px" height="512px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>caution</title>
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="caution" fill-rule="nonzero" fill="#000000">
          <g id="warning" transform="translate(6.000000, 29.000000)">
            <path d="M249.5,31.3310858 L471.957992,413.834416 L27.0420077,413.834416 L249.5,31.3310858 L249.5,31.3310858 Z M249.5,0 L0,429 L499,429 L249.5,0 L249.5,0 Z" id="Shape"></path>
            <rect id="Rectangle-path" x="241" y="128" width="17" height="191"></rect>
            <rect id="Rectangle-path" x="241" y="343" width="17" height="30"></rect>
          </g>
        </g>
      </g>
    </svg>
  </i>
  <div role="alert" class="">
    <ul class="status-message__list typog-body">
      <li>Officia maiores quasi laborum. Non illum voluptatum aperiam voluptas distinctio officia aut officia.</li>
    </ul>
    <div class="status-message__cta">
      <a href="" class="link link--cta">Read more</a>
    </div>
  </div>
</div><!-- End NWH Alerts -->';
        document.getElementsByTagName('body')[0].appendChild(alert_div);
        document.body.insertBefore(alert_div, document.body.childNodes[0]);
        
        // If CSS needs to be appended to the head.
        var cssLink = document.createElement("link");
        cssLink.href = "//rob-p2.github.io/alerts/northwell_alerts.css";
        cssLink.setAttribute('rel', 'stylesheet');
        cssLink.setAttribute('type', 'text/css');
        document.head.appendChild(cssLink);
