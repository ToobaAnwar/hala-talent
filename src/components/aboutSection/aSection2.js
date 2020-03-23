import React from 'react'

class ASection2 extends React.Component{
    // componentDidMount(){
    //     (function ($) {
    //         $.fn.countTo = function (options) {
    //           options = options || {};
              
    //           return $(this).each(function () {
    //             var settings = $.extend({}, $.fn.countTo.defaults, {
    //               from:            $(this).data('from'),
    //               to:              $(this).data('to'),
    //               speed:           $(this).data('speed'),
    //               refreshInterval: $(this).data('refresh-interval'),
    //               decimals:        $(this).data('decimals')
    //             }, options);
                
    //             var loops = Math.ceil(settings.speed / settings.refreshInterval),
    //               increment = (settings.to - settings.from) / loops;
                
    //             var self = this,
    //               $self = $(this),
    //               loopCount = 0,
    //               value = settings.from,
    //               data = $self.data('countTo') || {};
                
    //             $self.data('countTo', data);
                
    //             if (data.interval) {
    //               clearInterval(data.interval);
    //             }
    //             data.interval = setInterval(updateTimer, settings.refreshInterval);
                
    //             render(value);
                
    //             function updateTimer() {
    //               value += increment;
    //               loopCount++;
                  
    //               render(value);
                  
    //               if (typeof(settings.onUpdate) == 'function') {
    //                 settings.onUpdate.call(self, value);
    //               }
                  
    //               if (loopCount >= loops) {
    //                 $self.removeData('countTo');
    //                 clearInterval(data.interval);
    //                 value = settings.to;
                    
    //                 if (typeof(settings.onComplete) == 'function') {
    //                   settings.onComplete.call(self, value);
    //                 }
    //               }
    //             }
                
    //             function render(value) {
    //               var formattedValue = settings.formatter.call(self, value, settings);
    //               $self.html(formattedValue);
    //             }
    //           });
    //         };
            
    //         $.fn.countTo.defaults = {
    //           from: 0,               // the number the element should start at
    //           to: 0,                 // the number the element should end at
    //           speed: 1000,           // how long it should take to count between the target numbers
    //           refreshInterval: 100,  // how often the element should be updated
    //           decimals: 0,           // the number of decimal places to show
    //           formatter: formatter,  // handler for formatting the value before rendering
    //           onUpdate: null,        // callback method for every time the element is updated
    //           onComplete: null       // callback method for when the element finishes updating
    //         };
            
    //         function formatter(value, settings) {
    //           return value.toFixed(settings.decimals);
    //         }
    //       }($));
          
    //       $(function ($) {
    //         // custom formatting example
    //         $('.count-number').data('countToOptions', {
    //         formatter: function (value, options) {
    //           return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    //         }
    //         });
            
    //         // start all the timers
    //         $('.timer').each(count);  
            
    //         function count(options) {
    //         var $this = $(this);
    //         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    //         $this.countTo(options);
    //         }
    //       });
    //        // optional
    // $('#blogCarousel').carousel({
    //     interval: 5000
    // });

    // }
    
    render(){
     
        return(
            <div className="app">
                
<section>
  <div className="container">
  <div className="row">
      <br/>
    
  </div>
    <div className="row text-center">
          <div className="col">
          <div className="counter">
      <i className="fa fa-code fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="100" data-speed="1500">100</h2>
       <p className="count-text ">Jobs</p>
    </div>
          </div>
              <div className="col">
               <div className="counter">
      <i className="fa fa-coffee fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="1700" data-speed="1500">1,700</h2>
      <p className="count-text ">Cv's</p>
    </div>
              </div>
              <div className="col">
                  <div className="counter">
      <i className="fa fa-lightbulb-o fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="11900" data-speed="1500">11,900</h2>
      <p className="count-text ">Companies</p>
    </div></div>
              <div className="col">
              <div className="counter">
      <i className="fa fa-bug fa-2x"></i>
      <h2 className="timer count-title count-number" data-to="157" data-speed="1500">157</h2>
      <p className="count-text ">Members</p>
    </div>
              </div>
         </div>
</div>
</section>

            </div>
        )
    }

}
export default ASection2;