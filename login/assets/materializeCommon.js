jQuery(document).ready(function(){
	/*added to simulate touch evenets in touch devices. defect:772745*/	
	simulateTouchEvents(jQuery('.widget-head'), true);
	jQuery('ul.tabs').tabs();
	jQuery('select').material_select();
	jQuery('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	  });
	
	
		/*
         * Handling responsive behaviour of breadcrumb
         */
       jQuery(".breadcrumb-icon").on('click',function(event){
            event.preventDefault();
            jQuery(".breadcrumb-content").slideToggle();
        });
               function breadcrumbStatus() {
            if(window.innerWidth > 900) {
                jQuery(".breadcrumb-content").css('display', 'inline-block');
            } else {
                jQuery(".breadcrumb-content").hide();
            }
        }

        breadcrumbStatus();

        jQuery(window).on("resize",function() {
            breadcrumbStatus();
            /*Leumi-- Call method to Make the Overflow attribute of Main to hidden--start*/
			closeKeyBoardDisplay();
			/*Leumi-- Call method to Make the Overflow attribute of Main to hidden--End*/
			updateNLPSearchAlignment();
			updateMenuSearchAlignment();
        });
        		  
/* COMMENTED AFTER HAMBURGER MENU CHANGES	jQuery(".menuBarIcon").on('click',function() {	
		jQuery(".side-nav").animate({
		                width: "toggle"
			});
		jQuery(".qp-ui-mask-modal").toggleClass("qp-ui-mask-visible");
	}); */	
	
	 jQuery('#grey_out').on('click',function(e) { 		 
		jQuery(".side-nav").animate({
		    width: "toggle"
		});		
		jQuery(".qp-ui-mask-modal").toggleClass("qp-ui-mask-visible");
   });

        /*
         * Radio button start
         */

        /*
         * Radio button state change event handler.
         */

	 	jQuery("input[type='radio']").on("change",function () {
            var radioName = jQuery(this).attr("name");
            if (jQuery(this).is(":checked")) {
                //Unselect all the other radio buttons in the group
            	jQuery("input[name='" + radioName + "']").closest('.radio-btn-wrapper').attr('aria-checked', false);
                //select the radio button on focus
            	jQuery(this).closest('.radio-btn-wrapper').attr('aria-checked', true);
            }
        });

        /*
         * Key press event handler for elements with 
         * class 'radio-btn-wrapper'
         */
	 	jQuery('.radio-btn-wrapper').on("keypress",function (theEvent) {
            /*
             * Check if key pressed is Enter key
             */
            if (theEvent.which === 13) {
            	jQuery(this).find("input").trigger("click");
            }
        });

        /*
         * Radio button end
         */
         
	 	// Changes for TOL 855120 - My Profile CustomerId and Division ID drop down scroll issue Starts
	 	var profileBX_new_obj = document.getElementById("profileBX_new");
	 	var hideDropdown = function(ele) {
	 		jQuery('#profileBX_new').find('.autocomplete-dropdown').each(
	 				function(index, value) {
	 					var targetClass = jQuery(value).attr(
	 					'data-activates');
	 					jQuery('.' + targetClass).hide();
	 					if (jQuery('.' + targetClass).next().hasClass(
	 					'autocomplete-suggestions')) {
	 						jQuery('.' + targetClass).next().hide();
	 					}
	 				});
	 	}
	 	if (null != profileBX_new_obj && profileBX_new_obj != "") {
	 		profileBX_new_obj.addEventListener("scroll", hideDropdown);
	 		document.addEventListener("scroll", hideDropdown);
	 	}
	 	jQuery(document).on('click','.collapsiblelink',hideDropdownInsideSearch); 
	 	   
});

function hideDropdownInsideSearch(){
	var collapsibleWrapper = document.getElementsByClassName("collapsible-wrapper")[0];
	var hideCollapsibleDropdown = function(ele) {
		jQuery('.collapsible-wrapper').find('.autocomplete-dropdown').each(
				function(index, value) {
					var targetClass = jQuery(value).attr(
					'data-activates');
					jQuery('.' + targetClass).hide();
					if (jQuery('.' + targetClass).next().hasClass(
					'autocomplete-suggestions')) {
						jQuery('.' + targetClass).next().hide();
					}
				});
	}
	if (null != collapsibleWrapper && collapsibleWrapper != "") {
		collapsibleWrapper.addEventListener("scroll", hideCollapsibleDropdown);
	}
}
//Changes for TOL 855120 - My Profile CustomerId and Division ID drop down scroll issue Ends

/*  Starts - Fix for removing the auto pop up of caps lock coming in IE on top of virtual keypad*/
jQuery(document).ready(function(){
	document.msCapsLockWarningOff = true;
	/* STARTS Code for displaying the unread message count*/
	if(jQuery("#MSGC_COUNT") != 'undefined'){
		jQuery("#mailCount").text(jQuery("#MSGC_COUNT").text());
		if(jQuery("#MSGC_COUNT").text() != ''){
			jQuery(".unreadMailsCountDash").css('visibility','visible');
		}
	}	
	/* ENDS Code for displaying the unread message count*/
	if(jQuery("#widgetBar_WMAILUX5").length > 0){
			if(jQuery('#DISPLAY_UX5_NOTIFICATIONS_ON_LOAD').attr('value')=="N"){
			}else{
			handleDynamicDataContentAJAXSubmit('widgetBar_WMAILUX5');
			}
	}
	
	 	jQuery(".mailsIconLink").on('click',function(){
	 		handleDynamicDataContentAJAXSubmit('widgetBar_WMAILUX5');
			//jQuery(".mailsBox").css('display','block');

			var messIconLeftPos = jQuery(".mailsIconLink").offset().left;
			var mailsContainerRightPos = jQuery(".mailsBox").offset().left + jQuery(".mailsBox").width();
			var offset = mailsContainerRightPos -  messIconLeftPos - 5;
			jQuery(".mailArrow").css('right',offset);
                						
			var profileElement = jQuery("#profileBx");
		       if(typeof profileElement != typeof undefined &&  profileElement.length > 0 ) {
			        
			        if(jQuery('#profileBx').is(":visible")) {
			           jQuery('.person-name').toggleClass("upArrow");
			            jQuery('#profileBx').hide();
			        }
			     } 
		       
		   	jQuery('#settingsBx').hide();
		   	jQuery("#themesBx").hide();
     	});
		/* STARTS Display the alerts notification container*/
   	if(jQuery("#widgetBar_W7").length > 0){
   		if(jQuery('#DISPLAY_UX5_NOTIFICATIONS_ON_LOAD').attr('value')=="N"){
			}else{
		handleDynamicDataContentAJAXSubmit('widgetBar_W7');
		}
	}
	
	jQuery(".notifyIconLink").on('click',function(){
		jQuery(".widgetBar_W18_holderDiv_Container").css('display','none');
	 	handleDynamicDataContentAJAXSubmit('widgetBar_W7');	
	 	
	 	var notifyIconLeftPos = jQuery(".notifyIconLink").offset().left;
		var notifyContainerRightPos = jQuery(".notifyBox").offset().left + jQuery(".notifyBox").width();
		var offset = notifyContainerRightPos -  notifyIconLeftPos - 20;
		jQuery(".notifyArrow").css('right',offset);
		
		var profileElement = jQuery("#profileBx");
	     if(typeof profileElement != typeof undefined &&  profileElement.length > 0 ) {
		        
		        if(jQuery('#profileBx').is(":visible")) {
		           jQuery('.person-name').toggleClass("upArrow");
		            
		            jQuery('#profileBx').hide();
		        }
		     }
	     jQuery("#themesBx").hide();
    });
	
	jQuery(".applnThemes").on('click',function(){
		jQuery(".themeChange").css("left",jQuery(".applnThemes").offset().left);		
		var profileElement = jQuery("#profileBx");
	     if(typeof profileElement != typeof undefined &&  profileElement.length > 0 ) {
		        
		        if(jQuery('#profileBx').is(":visible")) {
		           jQuery('.person-name').toggleClass("upArrow");
		            
		            jQuery('#profileBx').hide();
		        }
		     }
	     jQuery('#settingsBx').hide();
	     jQuery('#mailsBox').hide();
    });	
	/* ENDS Display the alerts notification container*/
	
});
/*  Ends - Fix for removing the auto pop up of caps lock coming in IE on top of virtual keypad*/


	/*added to simulate touch evenets in touch devices*/
	function simulateTouchEvents(oo,bIgnoreChilds)
	{
	 if( !jQuery(oo)[0] )
	  { return false; }
	
	 if( !window.__touchTypes )
	 {
	   window.__touchTypes  = {touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup'};
	   window.__touchInputs = {INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,'input':1,'textarea':1,'select':1,'option':1};
	 }
	
	jQuery(oo).on('touchstart touchmove touchend', function(ev)
	{
	    var bSame = (ev.target == this);
	    if( bIgnoreChilds && !bSame )
	     { return; }
	
	    var b = (!bSame && ev.target.__ajqmeclk), // Get if object is already tested or input type
	        e = ev.originalEvent;
	    if( b === true || !e.touches || e.touches.length > 1 || !window.__touchTypes[e.type]  )
	     { return; } //allow multi-touch gestures to work
	
	    var oEv = ( !bSame && typeof b != 'boolean')?$(ev.target).data('events'):false,
	        b = (!bSame)?(ev.target.__ajqmeclk = oEv?(oEv['click'] || oEv['mousedown'] || oEv['mouseup'] || oEv['mousemove']):false ):false;
	
	    if( b || window.__touchInputs[ev.target.tagName] )
	     { return; } //allow default clicks to work (and on inputs)
	
	    // https://developer.mozilla.org/en/DOM/event.initMouseEvent for API
	    var touch = e.changedTouches[0], newEvent = document.createEvent("MouseEvent");
	    newEvent.initMouseEvent(window.__touchTypes[e.type], true, true, window, 1,
	            touch.screenX, touch.screenY,
	            touch.clientX, touch.clientY, false,
	            false, false, false, 0, null);
	
	    touch.target.dispatchEvent(newEvent);
	    e.preventDefault();
	    ev.stopImmediatePropagation();
	    ev.stopPropagation();
	    ev.preventDefault();
	});
	 return true;
	}; 
function handleDynamicDataContentAJAXSubmit(elementId){
	var divId =elementId+"_holderDiv";
	var clickedLi =elementId;
	var forceAJAXCall = "N";
	var ajaxTriggered = "N";
	var forAjaxAttr = jQuery('#'+elementId).attr('data-force-ajaxCall');
	if(forAjaxAttr && forAjaxAttr=="Y"){
		forceAJAXCall="Y";
	}	
	if(jQuery('#'+divId).children().length==0 || forceAJAXCall=="Y"){
		if(jQuery('#'+divId).children().length>0){
			var groupletId = jQuery('#'+divId).find('.widget-content').attr('id');
			jQuery('.'+divId+'_Container').slideToggle();			
		}else{
			jQuery('#'+divId).append(htmlDecode(widgetContentMap.get(elementId)));
			ajaxTriggered ="Y";
			/*fix for defect 772557*/
			if(htmlDecode(widgetContentMap.get(elementId))==""){
					//jQuery('.icon-notification').css('display','none');				
			}
		}
		if(jQuery('#DISPLAY_UX5_NOTIFICATIONS_ON_LOAD').attr('value')=="N" && ajaxTriggered=="Y"){
				setTimeout(function(){
	      			jQuery('.'+divId+'_Container').slideToggle();
				},0);			 		
			}else{
				//do nothing			
			}
	} else{
		jQuery('.'+divId+'_Container').slideToggle();
	}
}

function rowSelectionOnCheckBoxClick(){
    /*
     * Check box functionality in table
     */
 	jQuery("table tbody input:checkbox").on('click',function(){
        if(jQuery(this).is(":checked")) {
        	jQuery(this).parents('tr').addClass('checkBoxSelected');
        } else {
        	jQuery(this).parents('tr').removeClass('checkBoxSelected');
        }
     });

 	jQuery("table.multiTableHeading  tbody input:checkbox").on('click',function(){
        if(jQuery(this).is(":checked")) {
        	jQuery(this).parents('tbody').addClass('checkBoxSelected');
        } else {
        	jQuery(this).parents('tbody').removeClass('checkBoxSelected');
        }
 	 });
}

	jQuery(window).on("resize",function(){
	if(!(/android/i.test(navigator.userAgent)))
	jQuery('.all-datepicker').trigger("focus").trigger("blur");
    });
/* 
         * Initialization of Text Area
         */
         
   function materializeTextAreaInitialization(){

	   jQuery('input, textarea').characterCounter();
			
	}
   
   //Function to prevent the drag from and drop to textBox and Text area
   function restrictDragNdDrop(){
	   jQuery('input, text').attr('ondragstart', 'return false');
	   jQuery('input, textarea').attr('ondragstart', 'return false');
	   
	   jQuery('input, text').attr('ondrop', 'return false');
	   jQuery('input, textarea').attr('ondrop', 'return false');			
	}

 function materializeMegamenuEffects(){	
    /*
     * Mega Menu start
     */
    jQuery("#menu-button").on('click',function (event) {
        jQuery(this).attr("aria-expanded", "true");
        if(jQuery("#timelineImageExpand").hasClass("showTimeline")){
        	jQuery(".timelineCollpaseIcon").trigger('click');
        }
        event.stopPropagation();
        jQuery(".mask").css({
            "display": "block",
            "z-index": "6000"
        });
        jQuery('html').addClass('hide-vertical-scroll');
        jQuery(".dashboard-menu-container").addClass("expanded");
        if(jQuery("menu__link--current").length==0 && jQuery(".menu__breadcrumbs a:nth-child(2)").length==0){
		/*Commented for Lumi for remove the Highlighting the first elemnt in hamburger */
        	/*if(jQuery(".menu__level--current")){
            	jQuery(".menu__level--current li:first").addClass("menu__link--current");
            }*/
        }
        
        jQuery("#ml-menu").scrollTop(0);
        
        /*if(jQuery("#ID_RTXNS")[0].click()){
        	jQuery("#ID_IL_RTXNS_10")[0].click();
        }*/
        //event.stopPropagation();
        //jQuery("#ID_IL_RTXNS_10")[0].click();
        
        //To display context menu
        
        /*jQuery(".main-menu-btn-wrapper").parent().css("display", "block");
        
        //jQuery(".main-menu-btn-wrapper").parent().append("<a class=\"second-breadcrumb\">Transactions</a><a>Initiate Payments</a>");
        
        jQuery(".menu__level--current").removeClass("menu__level--current");
        
        jQuery("#sub_ID_IL_RTXNS_10").addClass("menu__level--current");
        
        jQuery(".menu__wrap").css("margin-top", "103px");
        
        //Add breadcrumbs
        //MLMenu.prototype._addBreadcrumb(2);
        //MLMenu.prototype._addBreadcrumb(8);
        
        if(!jQuery("#BCTransactions").length>0){
        	var bc = document.createElement('a');
        	bc.setAttribute("id","BCTransactions");
			bc.innerHTML = "Transactions";
			jQuery(".menu__breadcrumbs")[0].appendChild(bc);
			
			bc.addEventListener('click', function(ev) {
				ev.preventDefault();
				//jQuery("#parent_RTXNS")[0].click();
			});
        }
        
        if(!jQuery("#BCInitiate_Payments").length>0){
        	var bc = document.createElement('a');
        	bc.setAttribute("id","BCInitiate_Payments");
			bc.innerHTML = "Initiate Payments";
			jQuery(".menu__breadcrumbs")[0].appendChild(bc);
        }
        */
        
        //event.stopPropagation();
        
    });

    /*
     * Toggle Effect for more items in mega-menu
     */
  
        jQuery('.more-item').hide();
        jQuery('.show_button').on('click',function(event) {
            jQuery(".icon-profile-dropdown").toggleClass("rotate");
            jQuery('.more-item').slideToggle();
            jQuery('.more-item').css('display', 'block');
            
            /* Commented as Fix for ticket id : 772466 */
           /* if(jQuery("menu__link--current").length==0 && jQuery(".menu__breadcrumbs a:nth-child(2)").length==0){
            	if(jQuery(".menu__level--current")){
                	jQuery(".menu__level--current li:first").addClass("menu__link--current");
                }
            }
            */
            event.stopImmediatePropagation();
        });

        jQuery('.dropdown-icon').on('click',function(event) {
            event.stopImmediatePropagation();
            jQuery(".show_button").trigger('click');
        });	
        
        /*
         * Handled click event on mask
         */
        jQuery(".mask").on('click',function(event) {
            event.preventDefault();
            /*jQuery(".right-container .right-container-content").removeClass("expanded");
            jQuery(".right-container .right-container-content").attr("aria-hidden","true");
            jQuery(".left-container .left-container-content").removeClass("expanded");
            jQuery(".left-container .left-container-content").attr("aria-hidden","true");*/                            
            jQuery(".mask").hide();
            jQuery(".mask").css("z-index","");
            jQuery('html').removeClass('hide-vertical-scroll');
            jQuery(".dashboard-menu-container").removeClass("expanded");   
            jQuery("#menu-button").attr("aria-expanded", "false");
            //refreshRightPanel(); 
        });
        
        /*jQuery("#global").on('click',function(event) {
       		var isMegaMenuOpen = jQuery(".dashboard-menu-container.expanded").length;                
            if(isMegaMenuOpen)
            {
                jQuery('.mask')[0].click()
            }
           	//event.preventDefault();
        });*/
	
	}
	
		/* 
         * Initialization Radio Button and Check boxes 
         */
         
   function materializeRadioAndCheckBox(){

	   /*
         * Checkbox with span tag
         */
         jQuery(".span-checkbox").on('click',function(event){
         //jQuery(this).prev('input[type="checkbox"]').prop('checked','checked');
            jQuery(this).prev('input[type="checkbox"]').trigger('click');
			event.preventDefault();
			event.stopImmediatePropagation(); 
         });

        /*
         * Radio button with span tag
         */
         jQuery(".span-radiobutton").on('click',function(){
             //jQuery(this).prev('input[type="radio"]').val();
             if(!jQuery(this).prev('input[type="radio"]').is(":disabled")){
             jQuery(this).prev('input[type="radio"]').prop('checked','checked');
                jQuery(this).prev('input[type="radio"]').trigger('click');
                }
                
             });
         
         /*Binding the Checkbox --Start*/ 
         jQuery("body").off('click',".css-labelcheckbox");
         jQuery('.css-labelcheckbox').off('click');
         jQuery('.css-labelcheckbox').on('click',function(event){                           
               jQuery(this).prev('input[type="checkbox"]').trigger('click');  
               event.preventDefault();
               event.stopImmediatePropagation();});
                /*Binding the Checkbox --End*/ 
         jQuery("input[type='password']").on('cut copy paste', function (e) {
    		e.preventDefault(); //disable cut,copy,paste
    		alert('cut,copy & paste options are disabled !!');
	  	});
			
	}
	
	/* 
         * Initialization of Autocomplete feature for the input 
         */
         
        function materializeAutoComplete(){

	/*new changes started here*/
        jQuery(".autocomplete-text").each(function(index){
			var choices = [];
			var dropdownText = jQuery(this);
			var dropdownValues = dropdownText.siblings(".autocomplete-values");
			
			dropdownValues.find('option').each(function(index){
				choices.push(jQuery(this).text());
			});
			
			dropdownText.autoComplete({
				minChars: 1,
				source: function(term, suggest) {
					term = term.toLowerCase();
					var suggestions = [];
					for (var i = 0; i < choices.length; i++)
						if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
					suggest(suggestions);
				},
				onSelect: function(event, term, item){
                    dropdownValues.val( dropdownValues.find('option:contains(' + term + ')').val() ).trigger("change");
				}
			});
		});
		
		
		jQuery(".autocomplete-dropdown").each(function(index){
		
		
		/*Added code for putting a right border in dropdown for restricting the text to overlap with arrow icon in IE10 */
		if (navigator.appVersion.indexOf("MSIE 10") !== -1)
		{
		    //jQuery(".autocomplete-dropdown").attr("style","border-right: 20px solid transparent !important;box-shadow: 0 1px 0 #E9E9E9, 0px 0px 0 #E9E9E9 !important;border-bottom: none !important");
		    jQuery(".autocomplete-dropdown").attr("style","border-right: 20px solid transparent !important");
		     //jQuery(".autocomplete-dropdown").attr("style","box-shadow: 0 1px 0 #E9E9E9, 0px 0px 0 #E9E9E9 !important");
		     // jQuery(".autocomplete-dropdown").attr("style","border-bottom: none !important");
		    
		}
            if(!(jQuery(this).hasClass('initialized'))) {
                var partString = getRandomString();
			var choices = [];
			var selectedString = "";
			var liOptions = "";
			var dropdownText = jQuery(this);
            dropdownText.attr("data-activates", "autocomplete-dropdown-values-" + partString);
            dropdownText.attr("id_", "");
            dropdownText.data("activates", "autocomplete-dropdown-values-" + partString);
			var dropdownValues = dropdownText.siblings(".autocomplete-values");
			
			//var listString = ".autocomplete-dropdown-values-" + index ;
			//if(jQuery(listString).size() === 0){
			
			var myProfDropdownName = jQuery(this).siblings('div').find('select').attr('name');
			if(typeof myProfDropdownName == typeof undefined){
				myProfDropdownName = jQuery(this).siblings('select').attr('name');
			}
             /* Tool tip changes dropdown */
			jQuery("<span class='tooltiptext'>To view full list please clear selected value or use the arrow button</span>").insertAfter(dropdownText.next());
            jQuery('body').append('<ul class="autocomplete-values-list autocomplete-dropdown-values-' + partString + '"></ul>');
			//dropdownValues.after('<ul class="autocomplete-values-list"></ul>')
			
			dropdownValues.find('option').each(function(index){
                var selected = jQuery(this).prop('selected');
                if (typeof selected !== typeof undefined && selected !== false) {
                    dropdownText.val(jQuery(this).text());
                    dropdownText.attr("id_",index);
                    // dropdownValues.val(jQuery(this).val()).trigger("change");
                    // dropdownValues.trigger("change");
                }
				choices.push(jQuery(this).html());
				liOptions += "<li value=\""+index+"\">" + jQuery(this).html() + "</li>";
			});
            jQuery(".autocomplete-values-list.autocomplete-dropdown-values-" + partString).html(liOptions);

			
            if(myProfDropdownName != 'undefined' && 
                    (myProfDropdownName == 'PageMasterFG.SELECTED_CUST_ID__' || myProfDropdownName == 'PageMasterFG.SELECTED_CTX_ID__' ||
                     myProfDropdownName == 'PageMasterFG.SELECTED_DIV_ID__' || myProfDropdownName== 'DashboardFG.DIV_ID_SELECT' || 
                     myProfDropdownName== 'DashboardFG.CUST_ID_SELECT' || myProfDropdownName== 'PageMasterFG.DIV_ID_SELECT' ||
                 myProfDropdownName== 'DashboardAutoAlignFG.DIV_ID_SELECT' || myProfDropdownName== 'DashboardAutoAlignFG.CUST_ID_SELECT' ||
                 myProfDropdownName== 'DashboardAutoAlignFG.SELECTED_CTX_ID__' || myProfDropdownName== 'DashboardFG.SELECTED_CTX_ID__' ||
                 myProfDropdownName== 'MailFG.SELECTED_CUST_ID__' || myProfDropdownName== 'MailFG.SELECTED_DIV_ID__' ||
                 myProfDropdownName== 'MailListFG.SELECTED_CUST_ID__' || myProfDropdownName== 'MailListFG.SELECTED_DIV_ID__'))               
                     {
                          myProfileEffects(myProfDropdownName,partString);
                     }

			/*Updated the Code for fixing the click issue in IE browser-- Added two more event mousedown mouseup */
            jQuery(".autocomplete-values-list.autocomplete-dropdown-values-" + partString + " li").on("mousedown mouseup click", function() {
            	
            		if( jQuery(this).text() != dropdownText.val() ){
					dropdownText.val(jQuery(this).text());
				   
				    // dropdownValues.val( dropdownValues.find('option:contains(' + jQuery(this).text() + ')').val() ).trigger("change");
				    var selectedText = jQuery(this).text().trim();
				    if(dropdownValues != 'undefined' && (dropdownValues.find('option').length == 0 || dropdownValues.prop("tagName") !="SELECT" )){
				    	dropdownValues = dropdownText.siblings(".autocomplete-values").find('select');
				    }
				    dropdownValues.find('option').each(function(index){
				    if(selectedText == jQuery(this).text().trim()) {
				            dropdownValues.val(jQuery(this).val()).trigger("change");
				            return false;
				        }
                    });
				}
                dropdownText.siblings('label').addClass('active');
			});
			dropdownText.autoComplete({
				minChars: 0,
				source: function(term, suggest) {
					term = term.toLowerCase();
					var suggestions = [];
					for (var i = 0; i < choices.length; i++)
						if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
					suggest(suggestions);
				},
				onSelect: function(event, term, item){
                    // dropdownValues.val( dropdownValues.find('option:contains(' + term + ')').val() ).trigger("change");
					// created "if" condition for TOL 843641 as .trim() is only a string function
                    if (typeof term=="string")
                    {
                    term=term.trim();
                    } 
                    
					if(dropdownValues != 'undefined' && (dropdownValues.find('option').length == 0 || dropdownValues.prop("tagName") !="SELECT" )){
                    	dropdownValues = dropdownText.siblings(".autocomplete-values").find('select');
                    }
                    dropdownValues.find('option').each(function(index){
                        if(term == jQuery(this).text().trim()) {
                            dropdownValues.val(jQuery(this).val()).trigger("change");
                            return false;
                        }
                    });
				}
		            }).next(".autocomplete-icon").on("click", function(e) {
		            
		            /* Fix for IE10 Disabling the Arrow icon for the Dropdowns --Start */
		            if(jQuery(this).hasClass('disablePointerEvents')){
		            	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		            	return;
		            }
		             /* Fix for IE10 Disabling the Arrow icon for the Dropdowns --End */
                if (!jQuery(this).hasClass('active')) {
                    closeAllAutoCompleteOptions();
                    var targetList = jQuery(".autocomplete-values-list." + (jQuery(this).siblings("input.autocomplete-dropdown").data("activates")))
                    targetList.show();
					
					 //Divya fix for Ticket :769263
					 if((fsClientBrowser() == 'Safari') && (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) && navigator.userAgent.match(/like Mac OS X/i))
					 {
					 targetList.css("width", dropdownText.outerWidth()-2).css("left", dropdownText.offset().left).css("top", (dropdownText.offset().top + dropdownText.outerHeight())+1);
					 }
					else
					{
					targetList.css("width", dropdownText.outerWidth()-2).css("left", dropdownText.offset().left).css("top", (dropdownText.offset().top + dropdownText.outerHeight()));
					}
					 
					 if((fsClientBrowser() == 'Chrome') && (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) && navigator.userAgent.match(/like Mac OS X/i))
					 {
					 targetList.css("width", dropdownText.outerWidth()-2).css("left", dropdownText.offset().left).css("top", (dropdownText.offset().top + dropdownText.outerHeight())+1);
					 }
					else
					{
					targetList.css("width", dropdownText.outerWidth()-2).css("left", dropdownText.offset().left).css("top", (dropdownText.offset().top + dropdownText.outerHeight()));
					}
                  
					 
					 
					if (jQuery('.stage3_downloadnav').find('span>span.labelColumn_combo_download') != undefined ){
						if (jQuery('.stage3_downloadnav').find('span>span.labelColumn_combo_download').length > 0 ){
							var downloadDropdown = jQuery('.stage3_downloadnav').find('span>span input.autocomplete-dropdown');
							if (targetList.hasClass(downloadDropdown.attr('data-activates'))){
								targetList.css("max-height","85px");
								jQuery(targetList).next().css("max-height","85px");
							}
						}
					}					
                    jQuery(this).addClass('active');
                    jQuery(this).siblings("input").addClass("focused");
                    jQuery(this).siblings("label").addClass("focused");
                    
                    var idInput = jQuery(this).siblings().find('select').attr('id');
                    jQuery("[for='"+idInput+"']").addClass('focused');
                    /*fix for defect: 777311*/
                    jQuery('.per-page-selector .autocomplete-dropdown').attr('style',"color:#2196f3 !important;");

                } else {
                    closeAllAutoCompleteOptions();
                }
                e.stopImmediatePropagation();
            });

                jQuery(this).addClass("initialized");
            }
           // }
        });
		
		
		/*jQuery(document).on('click',function(){
			jQuery(".autocomplete-icon.active").siblings(".autocomplete-values-list").hide();
			jQuery(".autocomplete-icon.active").removeClass('active')
			
		});*/

        /*
         * Selected the entire text on focus of autocomplete input.
         */
        jQuery(".autocomplete-dropdown, .autocomplete-text").on("focus",function() {
            jQuery(this).select();
        });

        jQuery(document).on('click',function() {
            closeAllAutoCompleteOptions();
            //Added for closing the NLP Search Text box when click outside 
            closeNLPSearchBox();
        });

        function closeAllAutoCompleteOptions() {
            jQuery(".autocomplete-values-list").hide();
            jQuery(".autocomplete-icon.active").removeClass('active');
            jQuery("input.autocomplete-dropdown").removeClass("focused");
            jQuery(".autocomplete-values").siblings("label").removeClass("focused");
            jQuery("label").removeClass("focused");
            /*fix for defect: 777311*/
            jQuery('.per-page-selector .autocomplete-dropdown').attr('style',"");

        }
        
        
         /*
         * Random string genration logic
         */
        function getRandomString() {
            var length = 20;
            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }

/*new changes ends here*/
/*Addded this method to close the auto complete drop down on click of calendar icon*/
	jQuery(".picker-icon").on('click',function() {
				closeAllAutoCompleteOptions();
			});

		}
		
		/* 
         * Method for Resetting the Dropdown Value 
         */		         
         
         function refreshAutoCompleteValues(target){         
         	// var dataActivate = jQuery(target).parent().siblings(".autocomplete-dropdown").attr('data-activates');.data("activates")         	  
         	/* var textElement = jQuery(target).parent().siblings(".autocomplete-dropdown");
         	 var dataActivate = jQuery(textElement).data("activates");
	         jQuery(textElement).removeClass("initialized");	         
	         jQuery('.'+dataActivate).remove();
	         jQuery(textElement).data().sc.remove();*/
	         jQuery(target).febaCombobox('destroy');
	 		 materializeAutoComplete();
 		 }	
		 
        
        /* 
         * Method for Clearing the field in Overlay Screens 
         */
        
        function clearSearchPanelFields(val,container,idType) {
        
         	var inputElement = '';
	        var dropdownValues = '';
	        var textElement = '';
	        var selectedOption = '';
	        var fieldName = '';
	        var field = '';
	        var radioMap = {};
        
       		//var groupletId=feba.domManipulator.getAttribute(this.content[0],Constants.GROUPLET_ID_ATTR);
	       	 /* Clearing the Dropdown --Start*/ 
	       	 if(idType == 'class'){
	       	 	container = '.' + container ;
	       	 }else if(idType =='id'){
	       	 
		       	 /*Code to get the Grouplet Id--Start */
	       		
	       		var buttonId = jQuery(val).attr('id');
	       		
	       		var groupletId = buttonId.substring(0,buttonId.indexOf(":"))
	       		/*Code to get the Grouplet Id--End */
	       		
	       		if(groupletId.length > 0){
	       	 		container = '#' + groupletId + '\\:'+ container ;
	       	 	}else{
	       	 		container = '#' + container ;
	       	 	}
	       	 }
			    var selectFields = jQuery(container).find('select');
			    
			    var disabled ='';
			
			    for(var count=0, length=selectFields.length; count < length; count++) {			        
					inputElement =  jQuery(selectFields[count]).parent().find('input');	
					dropdownValues = jQuery(inputElement).siblings(".autocomplete-values");					
					textElement =  jQuery(selectFields[count]).parent().siblings('.autocomplete-dropdown');
					
					disabled = jQuery(textElement).prop('disabled');
					
					if(disabled != "disabled") {
					selectedOption = dropdownValues.find("option:first");						
						 if (typeof selectedOption !== typeof undefined) {
			                    jQuery(textElement).val(jQuery(selectedOption).text());	
			                    jQuery(textElement).attr("id_",dropdownValues.find("option:first").index());	
			                    dropdownValues.val(jQuery(selectedOption).val()).trigger("change");                     
			             }
			        }
			    }
			    /* Clearing the Dropdown --End*/
			    
			    
			    /* Radio Button Clear --Start */			    
			     var radiofields = jQuery(container).find('input[type="radio"]');
			     
			       for(var radioCount=0, radioLength=radiofields.length; radioCount < radioLength; radioCount++) {
				        field = radiofields[radioCount];
				        
				        disabled = jQuery(field).prop('disabled');
				        				        
				        if(disabled != "disabled") {				        
					        fieldName = jQuery(field).attr('name');			        
					        
					        if(fieldName in radioMap){
					         	jQuery(field).prop('checked', false);
					        }else{
					        	radioMap[fieldName] = '' ;
					        	jQuery(field).prop('checked', true);
					        }	
				        }		        
			        }			    
			    /* Radio Button Clear --End */
			
			
			 	/* Text Fields Clear --Start */
			    var textfields = jQuery(container).find('input').not(jQuery(container).find('.autocomplete-dropdown')).not(jQuery(container).find('.select-dropdown')).not(jQuery(container).find('input[type="radio"]'));			    
			    for(var count=0, length=textfields.length; count < length; count++) {
			        field = textfields[count];
			         disabled = jQuery(field).prop('disabled');		
			        switch(field.type)
			        {			           
			            case 'checkbox':
				            if(disabled != "disabled") {
				                jQuery(field).prop('checked', false);
				            }
				            break;			               		
			            case 'text':
			            case 'password':
			            case 'hidden':			           			
							if(disabled != "disabled") {
				                jQuery(field).val('');
				            }	  
			        }
			    }			    
			    /* Text Fields Clear --End */
			
				/* TextArea Fields Clear --Start */
			    var textAreafields = jQuery(container).find('textarea');
			    for(var count=0, length=textAreafields.length; count < length; count++) {
			     	disabled = jQuery(field).prop('disabled');					
					if(disabled != "disabled") {
			        	jQuery(textAreafields[count]).val('');
			        }
			    }
			    /* TextArea Fields Clear --End */
		}
		
		
			
		/* 
         * Initialization of Multi Select feature for the dropdown 
         */
         
        function materializeMultiSelect(){        
        
        jQuery("select[multiple]").each(function(index){
			var select = jQuery(this);
			//jQuery('<option value="all">Select All</option>').insertAfter(select.children("option:first"));
			select.prepend(jQuery('<option value="all">Select All</option>'));
			select.material_select();
			
			var ul = select.prev("ul");
			
			ul.children("li:nth-child(2)").on('click',function(){
				var options = ul.children("li:not(:nth-child(2))");
				if(jQuery(this).hasClass("active")){
					options.each(function( index ) {
						if(!jQuery(this).hasClass("active")){
							jQuery(this).trigger('click');
						}
					})
				}
				else{
					options.each(function( index ) {
						if(jQuery(this).hasClass("active")){
							jQuery(this).trigger('click');
						}
					})
				}
			});
			
			ul.children("li").on('click',function(){
				ul.prev("input").val( ul.prev("input").val().replace("Select All, ", "") );
			})
		});
        }
	
	
	function removeEmptyElements(){
		var rowElements = jQuery(".input-field");
		for (iCount=0; iCount < rowElements.length; iCount++){
			if(jQuery(rowElements[iCount]).children().length < 1){	
				jQuery(rowElements[iCount]).css('display','none');
			} else{
			
			var tempId = jQuery(rowElements[iCount]).attr('id');
			if(tempId == 'PageConfigurationMaster_3RINPTW__1:DataEntry_LeftContainer_Stage39.Ra11'){
			}
				var childElements = jQuery(rowElements[iCount]).children();
				var emptyElement = true;
				for(jCount=0; jCount < childElements.length; jCount++){
					//if(jQuery(childElements[jCount]).css('display') == 'block'){
					  if(jQuery(childElements[jCount]).css('display') != 'none'){
						emptyElement = false;
						break;
					}					
				}
				
				if(emptyElement == true){
					jQuery(rowElements[iCount]).css('display','none');
				}
				
			}
		}	
	
	}		  
/* Virtual Keypad changes START */	
	function materializeVirtualKeyboard(){
        jQuery('.virtual-keyboard').keyboard({
            // preview added above keyboard if true, original input/textarea used if false
            usePreview   : false,

            display: {
                'bksp'   : '\u2190',
                'default': 'ABC',
                'meta1'  : '.?123',
                'meta2'  : '#+=',
                'accept' : 'Accept'
            },
            layout: 'custom',
            customLayout: {},
            css : {
                // keyboard container
                container      : 'keyboard-container',
            },

            // Auto-accept content when clicking outside the keyboard (popup will close)
            autoAccept   : true,

            // Auto-accept content even if the user presses escape
            // (only works if `autoAccept` is `true`)
            autoAcceptOnEsc : true,

            // Use tab to navigate between input fields
            tabNavigation: true,

            // Set this to append the keyboard immediately after the input/textarea it
            // is attached to. This option works best when the input container doesn't
            // have a set width and when the "tabNavigation" option is true
            appendLocally: true,

            // Set the max number of characters allowed in the input,
            // setting it to false disables this option
            maxLength: false,

            // allow inserting characters @ caret when maxLength is set
            maxInsert: true,

            // Detecting input changes
            change: function(e, keyboard, el) {   
            	/* Added for Lumi changes to determine password strength while
            	   typing values from virtual keyboard */             
                var selectedField = el.getAttribute("id");
                var jsmethod = el.getAttribute("onkeyup");
                if(null != jsmethod && jsmethod != ""){
	                if(jsmethod.split("(")[0] == "chkSignOnPwdStrength"){                
	                	chkSignOnPwdStrength(selectedField);
	                }
	                else if(jsmethod.split("(")[0] == "chkTxnPwdStrength"){
	                	chkTxnPwdStrength(selectedField);    
	                }            	                
                }
            }
        });	
	}
	
	/*Added for Maitaining the Position of Keyboard --Start */
	function keyBoardDisplay(){
	
		var globalOffset = jQuery("#main").offset();
		var keyBoardOffset = jQuery(".ui-keyboard").offset();
		
		if(typeof globalOffset !== typeof undefined && typeof keyBoardOffset !== typeof undefined){
			var containerPosition = parseInt(jQuery("#main").offset().top) +  parseInt(jQuery("#main").height());
			var keyBoardPosition = parseInt(jQuery(".ui-keyboard").offset().top) +  parseInt(jQuery(".ui-keyboard").height());
			if(parseInt(keyBoardPosition) > parseInt(containerPosition)){
				jQuery("#main").css('overflow','visible');
			} else{
				jQuery("#main").css('overflow','hidden');
			}
		}
	}
	
	function closeKeyBoardDisplay(){
	
		jQuery("#main").css('overflow','hidden');
	}
	/*Added for Maitaining the Position of Keyboard --End */
	
	//Added by anand for header look and feel
	function collapsibleOnload(){
		jQuery('.collapsiblelink').each(function(index){
			var anChorClassName = jQuery(this).attr('class');
			if(anChorClassName != null && (anChorClassName.match('expandableMenu') || anChorClassName.match('collapsipleMenu'))){
				var collapsibleParent = jQuery(this).parent();
				/*collapsibleParent.addClass('collapsible');*/
				collapsibleParent.addClass('collapsiblePosition');
				var collapsibleContainerDiv = jQuery(this).parent().next();
				var collapsibleClass = collapsibleContainerDiv.attr('class');
				if(collapsibleContainerDiv != null && typeof collapsibleClass !== typeof undefined && collapsibleClass.match('collapsibleContainerDiv')){				
					jQuery(collapsibleContainerDiv).addClass('collapsible-body');	
				}
				
			}
		});		
	}
	
/* Virtual Keypad changes END */	
/* LinkDelink Slider effect starts */	
	function materializeDelink(){
		jQuery("div.tabNavLinkDelinkTable p span").on('click',function(e) {

			  // make sure we cannot click the slider
			  if (jQuery(this).hasClass('slider')) {			    
			    return;
			  }			
			  /* Add the slider movement */
			
			  // what tab was pressed
			  var whatTab = jQuery(this).index();			  
			
			  // Work out how far the slider needs to go
			  var howFar = 160 * whatTab;
			  
				if(whatTab==0)
			  	{			 
					jQuery(".slider").css({
				    left: howFar + "px"
				  	});
			   }
			   else
			   {
				   howFar=50;
				   jQuery(".slider").css({
				    left: howFar +"%"
				  });
			   }
			
			  /* Add the ripple */			
			  // Remove olds ones
			  jQuery(".ripple").remove();			
			  // Setup
			  var posX = jQuery(this).offset().left,
			      posY = jQuery(this).offset().top,
			      buttonWidth = jQuery(this).width(),
			      buttonHeight = jQuery(this).height();
			
			  // Add the element
			  jQuery(this).prepend("<div class='ripple'></div>");
			
			  // Make it round!
			  if (buttonWidth >= buttonHeight) {
			    buttonHeight = buttonWidth;
			  } else {
			    buttonWidth = buttonHeight;
			  }
			
			  // Get the center of the element
			  var x = e.pageX - posX - buttonWidth / 2;
			  var y = e.pageY - posY - buttonHeight / 2;
			
			  // Add the ripples CSS and start the animation
			  jQuery(".ripple").css({
			    width: buttonWidth,
			    height: buttonHeight,
			    top: y + 'px',
			    left: x + 'px'
			  }).addClass("rippleEffect");
			});
			}
/* LinkDelink Slider effect Ends */

/* The js function has been added to control the z-index of dropdowns in overlays.*/
function myProfileEffects(name,partString){
	if(jQuery(name) != 'undefined'){
		jQuery('ul.autocomplete-dropdown-values-'+partString).css('z-index','6001');
	}	
}


    /* Method to load the CSS File on load of the page */
	function loadHorizontalCssFile(groupletId)
	{	    
	    	var userType ='';
			if(document.getElementById('userType')){
				userType = document.getElementById('userType').value;
			}else if(document.getElementById('usertype')){
				userType = document.getElementById('usertype').value;
			}
			
			var userDefination ='';
			
			if(userType == '1'){
				userDefination ='consumer';
			}else if(userType == '2'){
				userDefination ='corporate';
			}else if(userType =='4'){
				userDefination ='bankuser';
			}else{
			    userDefination ='consumer';
			}
			
			var cssLink = 'L001/'+userDefination+'/theme/materializeHorizontal.css';
			
	        var fileref=document.createElement("link")
	        fileref.setAttribute("rel", "stylesheet")
	        fileref.setAttribute("type", "text/css")
	        fileref.setAttribute("href", cssLink)
	    
	    if (typeof fileref!="undefined")
	        document.getElementsByTagName("head")[0].appendChild(fileref);
	}
/* Added for tab Navigation changes START */
	
	function materializeTabEffects() {
		
		jQuery(".tabs-with-navigation .previous-tabs").on('click',function(event){
	            event.preventDefault();
	            var jQueryultabs = jQuery(this).parents(".tabs-with-navigation").find("ul.tabs"),
	            left_position = jQueryultabs.scrollLeft();
	            jQueryultabs.animate({scrollLeft: left_position - 200}, 400, function(){
	                set_tab_navigation_status(jQueryultabs);
	            });
	            
	        });
	        
	        jQuery(".tabs-with-navigation .next-tabs").on('click',function(event){
	            event.preventDefault();
	            var jQueryultabs = jQuery(this).parents(".tabs-with-navigation").find("ul.tabs"),
	            right_position = jQueryultabs.scrollLeft();
	            jQueryultabs.animate({scrollLeft: right_position + 200}, 400, function(){
	                set_tab_navigation_status(jQueryultabs);
	            });
	        });

	        

	        jQuery(".tabs-with-navigation ul.tabs").each(function(index){
	            var jQuerythis_value = jQuery(this);
	            set_tab_navigation_status(jQuerythis_value);

	            jQuery(window).on("resize",function(){
	                set_tab_navigation_status(jQuerythis_value);
	            });
	        });
	        
	        id_clicked=jQuery("[id='NEXT_INACTIVE_ID_ONDISABLE']").attr("value");
	        if(id_clicked != undefined && id_clicked!="NO_ID"){
	        	jQuery("[id='"+id_clicked+"']").trigger('click');
	        }
	 }
	 
	 function set_tab_navigation_status(ultabs) {

	            var ultabs_parents = ultabs.parents(".tabs-with-navigation");

	            if((ultabs.find('li.tab').first().position().left) < 0) {
	                ultabs_parents.find(".previous-tabs").fadeIn();
	            } else {
	                ultabs_parents.find(".previous-tabs").fadeOut();
	            }  

	            if((((ultabs.find('li.tab').last().position().left) + (ultabs.find('li.tab').last().outerWidth())).toFixed()) > (ultabs.outerWidth())) {
	                ultabs_parents.find(".next-tabs").fadeIn();
	            } else {
	                ultabs_parents.find(".next-tabs").fadeOut();
	            }
	        }   
	function materializeVerticalTabEffects() {   
	        jQuery('.tabs-vertical .tabs .tab').on('click',function(event){
			  jQuery('.tabs .tab').removeClass("u-zindex-front");
			  jQuery(this).addClass("u-zindex-front");
		  });
          
         jQuery('.tabs-vertical .tabs .tab').on('click',function(event){
          jQuery('.tabs .tab').addClass("u-ml-tab96");
             jQuery(this).removeClass("u-ml-tab96");
		  });
		  
		  }
	 
	 /* Added for tab Navigation changes END */	 
/* Function to call the Click Event when the checkbox is clicked */

function addOrRemoveWidgets(checkbox,groupletId,widgetType){
		
	if(jQuery(checkbox).prop('checked')){
		jQuery("[id*='SELECTED_INDEX_ARRAY']").removeAttr('checked');
		//jQuery(checkbox).prop('checked','checked');
		jQuery(checkbox).prop('checked',true);
		
		if(widgetType=='INSTA'){
			jQuery("[id='"+groupletId+":ADD_WIDGET']").trigger('click');
		}else{
			jQuery('#ADD_WIDGET').trigger('click');
		}
	}
	else{
		jQuery("[id*='SELECTED_INDEX_ARRAY']").removeAttr('checked');
		//jQuery(checkbox).prop('checked','checked');
		jQuery(checkbox).prop('checked',true);
		if(widgetType=='INSTA'){
			jQuery("[id='"+groupletId+":REMOVE_WIDGET']").trigger('click');
		}else{
			jQuery('#REMOVE_WIDGET').trigger('click');
		}
	}
}

/* Function to call the Click Event when the checkbox label is clicked */
function checkboxTitleClick(checkbox,groupletId,widgetType){

	var inputField = jQuery("input[id='"+checkbox+"']");
	if(jQuery(inputField).prop('checked')){
		jQuery(inputField).prop('checked',false);;		
	}
	else{
		jQuery(inputField).prop('checked',true);
	}
	addOrRemoveWidgets(inputField,groupletId,widgetType);
}

/*Function to call the Search event on click of check box */
function SearchAndFilterByCriteria(groupletId){

	//jQuery('#SEARCH_WIDGET').trigger('click');
	//jQuery("[id='"+groupletId+":SEARCH_WIDGET']").trigger('click');
	
	if(groupletId ==null || groupletId == "null"){
		jQuery('#SEARCH_WIDGET').trigger('click');
	}else{
		jQuery("[id='"+groupletId+":SEARCH_WIDGET']").trigger('click');
	}
}


/*Function to Close the Personalise Dashboard window */
function closeModelWindow(groupletId,widgetType){	
	jQuery("[id*='BACK_FROM_WIDLIB']").trigger('click');
	
	if(widgetType=='INSTA'){
		jQuery("[id='"+groupletId+":BACK_FROM_WIDLIB']").trigger('click');
	}else{
		jQuery("[id*='BACK_FROM_WIDLIB']").trigger('click');
	}
	/*Fix for NLP search icon when model window is open */
	if(document.getElementById("NLPMenuSearch")){
			jQuery("[id='NLPMenuSearch']").removeClass("disablePointerEvents");
		}
		if(document.getElementById("NLP_SEARCH__")){
			jQuery("[id='NLP_SEARCH__']").removeClass("disablePointerEvents");
		}
}
function enableNLPSearch()
{
	if(document.getElementById("NLPMenuSearch")){
		jQuery("[id='NLPMenuSearch']").removeClass("disablePointerEvents");
	}
	if(document.getElementById("NLP_SEARCH__")){
		jQuery("[id='NLP_SEARCH__']").removeClass("disablePointerEvents");
	}
}


/*Function to load the Personalise Dashboard window on Click of CLose Button */
function loadPersonalisedDashboard(element){	
	jQuery("[id='PersonalisedDashBoard']").trigger('click');
}


/*Function to load the Personalise Dashboard window on Click of Reset link */
function callResetDashboard(element){	
	jQuery("[id='RESET']")[0].click();
}

/*Function to load the Personalise Dashboard window on Click of Refresh Account Link */
function callRefreshAccount(element){	
	jQuery("[id='HREF_ACCT']")[0].click();
}

/*
* function for enabling the slide in UI cache debug mode on application screens.
*/
function enableCacheDebugSlide(){	
		jQuery("body").on('click',"[id='slideContainerId']", function(event) {
	     	event.preventDefault(); 
	     	jQuery(this).find("#appFieldValues").slideToggle();	
		});	
}
jQuery(document).ready(function(){
		enableCacheDebugSlide();
	
	var fgName = feba.domManipulator.getFGNameFromPage();
	  var custIdtext=jQuery("#custId");
	  var divIdText=jQuery("#divId");
	  var switchRelationText=jQuery("#ctxId");
	  var custidTextFor=jQuery(custIdtext).attr("for");
	  var divIdTextFor=jQuery(divIdText).attr("for");
	  var switchRelationTextFor=jQuery(switchRelationText).attr("for");
	  jQuery(custIdtext).attr("for",fgName+custidTextFor);
	  jQuery(divIdText).attr("for",fgName+divIdTextFor);
	  jQuery(switchRelationText).attr("for",fgName+switchRelationTextFor);
	  
	jQuery("#PROFILE_PHOTO").attr("title",getMessage("Tooltip"));
	  var externalappname=jQuery("#externalAppUserName_header").text();
	  var firstname=jQuery("#firstName_header").text();
	  var lastname=jQuery("#lastName_header").text();
	  var corpname=jQuery("#corpName").text();
	  var nickName='';
	  if(jQuery("#nickName_header").html() != null && jQuery("#nickName_header").html() != undefined){  
		  nickName=jQuery("#nickName_header").html();
	  }
	  jQuery("#name_header").text('');
	  jQuery("#name_header").append(externalappname+" "+nickName+" "+firstname+" "+lastname+" "+corpname);
	});
/* 
 * Select Payee Functionality 
 */
function selectPayeeOnQuickPayWidget(groupletId) {
	if(jQuery("#CORPORATEUSERDASHBOARDUX5_MFT__1") != undefined){
		var selectedValue = jQuery("select[id='CorporateUserDashboardUX5_MFT__1:TranRequestManagerFG.DESTINATION_DETAILS_STRING_P']").val();
		if (selectedValue != undefined && selectedValue != "") {
			jQuery("label[id='CorporateUserDashboardUX5_MFT__1:AccountNumber']").addClass('active');
			jQuery("label[id='CorporateUserDashboardUX5_MFT__1:BankIdentifier']").addClass('active');
		}else{
			jQuery("label[id='CorporateUserDashboardUX5_MFT__1:AccountNumber']").removeClass('active');
			jQuery("label[id='CorporateUserDashboardUX5_MFT__1:BankIdentifier']").removeClass('active');
		}
		jQuery("input[id='CorporateUserDashboardUX5_MFT__1:TranRequestManagerFG.TRAN_CP_ACC']").prop('disabled', true);
		jQuery("input[id='CorporateUserDashboardUX5_MFT__1:TranRequestManagerFG.TRAN_CP_ACC']").attr("aria-disabled", "true");	
		jQuery("input[id='CorporateUserDashboardUX5_MFT__1:TranRequestManagerFG.CP_BANK_IDENTIFIER']").prop('disabled', true);
		jQuery("input[id='CorporateUserDashboardUX5_MFT__1:TranRequestManagerFG.CP_BANK_IDENTIFIER']").attr("aria-disabled", "true");

	}
	if(jQuery("#RETAILUSERDASHBOARDUX5_MFT__1") != undefined){
		var selectedValue = jQuery("select[id='RetailUserDashboardUX5_MFT__1:TranRequestManagerFG.DESTINATION_DETAILS_STRING_P']").val();
		if (selectedValue != undefined && selectedValue != "") {
			jQuery("label[id='RetailUserDashboardUX5_MFT__1:AccountNumber']").addClass('active');
			jQuery("label[id='RetailUserDashboardUX5_MFT__1:BankIdentifier']").addClass('active');
		}else{
			jQuery("label[id='RetailUserDashboardUX5_MFT__1:AccountNumber']").removeClass('active');
			jQuery("label[id='RetailUserDashboardUX5_MFT__1:BankIdentifier']").removeClass('active');
		}
		jQuery("input[id='RetailUserDashboardUX5_MFT__1:TranRequestManagerFG.TRAN_CP_ACC']").prop('disabled', true);
		jQuery("input[id='RetailUserDashboardUX5_MFT__1:TranRequestManagerFG.TRAN_CP_ACC']").attr("aria-disabled", "true");	
		jQuery("input[id='RetailUserDashboardUX5_MFT__1:TranRequestManagerFG.CP_BANK_IDENTIFIER']").prop('disabled', true);
		jQuery("input[id='RetailUserDashboardUX5_MFT__1:TranRequestManagerFG.CP_BANK_IDENTIFIER']").attr("aria-disabled", "true");

	}
}
/*
 * formListing-- Method to get the Text input and trigger the search event if the configured Number of character reached.
 * 
 */
function formListing(event,type)
{    
	var value ='';
	
	if(type == 'lower'){
		value = document.getElementById("NLP_SEARCH_CONTAINER__").value;
		document.getElementById("NLP_SEARCH__").value = value;
	}else{
		value = document.getElementById("NLP_SEARCH__").value;
	}
	var keyCode;

	if(window.event){
		keyCode = window.event.keyCode; // IE hack
	} else{
		keyCode = event.which; // standard method
	}

	if(value.length == 0){        
        jQuery("[id='listview']").remove(); 
	}else if(value.length % 3 == 0 || keyCode == 13){           
        jQuery("[id='FETCH_SUGGESTION']").trigger('click');      
	}   
	feba.domManipulator.unblockUI();	
	
}


/*
 * populateSuggestion-- Method to populate the Result listing from the result got from the NLP search
 * 
 */

function populateSuggestion(){
	
	//get the result list from NLP search
	var resultArrayList = jQuery("#NLP_SEARCH_RESULTS__").html();	
	var resultArray = resultArrayList.split(',');	
	
	var result =[];
	var resultValueArray =[];
	var listdiv ='';

	for(var i = 0; i < resultArray.length; i++) {
	   // Trim the excess whitespace.
		resultArray[i] = resultArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
	   
		//populate the NLP search result list array.
		result[i] = resultArray[i].substring(0,resultArray[i].indexOf("|"));
		resultValueArray[i] = resultArray[i].substring(resultArray[i].lastIndexOf("|")+1 ,resultArray[i].length);
	}
	
	
	var parent = document.getElementById("SearchResult");
	if(document.getElementById('listview')!=null){
	var list1=document.getElementById('listview');
	jQuery(list1).remove();
	}
	var list2=jQuery("[id='listview']");
	jQuery(list2).remove();
	
	//Creating the UL element --Start
	var listview = document.createElement('ul');
	listview.setAttribute('id','listview');
	listview.setAttribute('data-role','listview');
	listview.setAttribute('data-inset','true');
	listview.setAttribute('data-theme','c');
	listview.setAttribute('data-dividertheme','b');
	listview.setAttribute('class','autocomplete-values-list listStyle');
	
	//Creating the UL element --End
	
	//var result =[];
	//result[0] = 'NLPSearchError_Oops! we could not find anything';
	
		//If there are no result found for NLP search, the the First element of the result list will contain the 
		//Error message configured in VERT appended with the Text NLPSearchError_ . If no error then it will be a list of results.
		
	var tempErrorMessage = result[0];
	if(tempErrorMessage!= null && tempErrorMessage.indexOf("NLPSearchError_") != -1){
		//Get the Error message and create the LI element.
		var errorMessage = tempErrorMessage.substring(tempErrorMessage.indexOf('_')+1,tempErrorMessage.length)
		listdiv = document.createElement('li');
		listdiv.setAttribute('id','listdiv0');
		listdiv.setAttribute('data-role','list-divider');
		listdiv.setAttribute('class','oops-text');
		listdiv.innerHTML = errorMessage;
		jQuery(parent).append(listview);
		listview.appendChild(listdiv);
	}else{
		listdiv = document.createElement('li');
		listdiv.setAttribute('id','listdiv0');
		listdiv.setAttribute('data-role','list-divider');
		listdiv.setAttribute('class','list-style firstListStyle');
		jQuery(parent).append(listview);
		listview.appendChild(listdiv);
		
		
		//category arraylist is sorted in ascending order of category index.
		//running the loop from last to first to display the most probable options as the first entry
		for(var index=result.length - 1; index > -1; index--) {						 
			listdiv = document.createElement('li');
			listdiv.setAttribute('id','listdiv'+index);
			listdiv.setAttribute('data-role','list-divider');
			listdiv.setAttribute('class','list-style');
			listdiv.setAttribute('value',resultValueArray[index]);
			listdiv.setAttribute('onclick',"naviagteToMenu('"+resultValueArray[index]+"')");
			listdiv.innerHTML = result[index];
			jQuery(parent).append(listview);
			listview.appendChild(listdiv);
		}
	}	
	
	  var reportWidth = viewport().width;  
	  var textBoxLeft = '';
	  if(reportWidth <= 949){
		  var textBoxLeft = jQuery(".SearcTextBoxLower").offset().left;
	  }else{
		  var textBoxLeft = jQuery(".searchTextBox").offset().left;
	  }
	jQuery(".listStyle").offset({ left : textBoxLeft});
			
}


/*
 * This method will the the the Click event for Navigating the the Menu screen once the Listing element is clicked.
 */
function naviagteToMenu(menuId){	
	document.getElementById('menuLinkTempSearchBox').value = menuId;
	// Fix for TOL 932820 - Changes for NLP search and navigation issue Starts
	var navigateButton = jQuery("[id='MENU_NAVIGATE_BUTTON']");
	navigateButton.removeAttr("disabled");
	navigateButton.trigger('click');
	// Fix for TOL 932820 - Changes for NLP search and navigation issue Ends
}
	
	

	jQuery('.searchIconLink').on('click',function(){ 		
		jQuery("[id='FETCH_SUGGESTION']").trigger('click');
	});
  
	  
	
  
  
/*
 * Method to show and hide the Search text box for different resolution.
 */
  function showSearchText(value){
	  if(jQuery(value).hasClass('disablePointerEvents') || typeof value == typeof undefined){
	    	this.event.preventDefault ? this.event.preventDefault() : (this.event.returnValue = false);
	    	return;
	  }
	  var reportWidth = viewport().width;
	  var icon = '';
	  if(reportWidth <= 950){
		  showSearchTextLower(value);
	  }else{
		 
	  if(reportWidth >= 480 && reportWidth <= 950){
		jQuery(".nlpArrowStyle").toggle();
	  }
	  if ( jQuery('.searchTextBox').hasClass('search-icon-show')){
		 // jQuery('.searchTextBox').removeClass('search-icon-show');
		  //jQuery('.search-icon-input').val("").trigger("blur").removeClass("search-icon-show");
	  }
	  else{
		//jQuery('.search-icon-input').val("").focus().addClass("search-icon-show");		
		 
		if(reportWidth >= 480 && reportWidth <= 950){
			jQuery('.search-icon-input').val("").focus().addClass("search-icon-show");	
			if(reportWidth >= 480 && reportWidth <= 749){
				icon = jQuery(".icon-search")[1];
			}else{
				icon = jQuery(".icon-search")[0];
			}
			var iconLeft = jQuery(icon).offset().left;
			jQuery(".searchTextBox").offset({ left : iconLeft});
			
			var searchTextLeft = jQuery(".searchTextBox").offset().left;
			jQuery(".nlpArrowStyle").offset({ left : parseInt(searchTextLeft)+10});
		}
	  }
	  //jQuery("#oops-text").hide();
	  jQuery("[id='FETCH_SUGGESTION']").trigger('click');
	  }
  }
  
  
function showSearchResults(){  
	
	value = document.getElementById("NLP_SEARCH_CONTAINER__").value;
	document.getElementById("NLP_SEARCH__").value = value;	
	  jQuery("[id='FETCH_SUGGESTION']").trigger('click');
	  
  }
  
  /*
   * Method to show and hide the Search text box for different resolution.
   */
    function showSearchTextLower(value){
      if(jQuery(value).hasClass('disablePointerEvents') || typeof value == typeof undefined){
	    this.event.preventDefault ? this.event.preventDefault() : (this.event.returnValue = false);
	    return;
      }
  	  var reportWidth = viewport().width;
  	  var icon = '';
  	  
  	 jQuery(".nlpSearchTextBoxContainer").removeAttr('style');
  		 
  	  if(reportWidth >= 480 && reportWidth <= 950){
  		jQuery(".nlpArrowStyle").toggle();
  	  }
  	  if ( jQuery('.nlpSearchTextBoxContainer').hasClass('nlpSearchTextBoxContainerShow')){
  		  jQuery('.nlpSearchTextBoxContainer').removeClass('nlpSearchTextBoxContainerShow');
  		  jQuery('.nlpSearchTextBoxContainer').val("").trigger("blur").removeClass("nlpSearchTextBoxContainerShow");
  	  }
  	  else{
  		jQuery('.nlpSearchTextBoxContainer').addClass("nlpSearchTextBoxContainerShow");	
  		jQuery('.SearcTextBoxLower').val("").trigger("focus");		
  		 
  		if(reportWidth >= 480 && reportWidth <= 950){
  			//jQuery('.search-icon-input').val("").focus().addClass("search-icon-show");	
  			if(reportWidth >= 480 && reportWidth <= 749){
  				icon = jQuery(".searchIconLowerRes")[0];
  			}else{
  				icon = jQuery(".searchIconHigherRes")[0];
  			}
  			//icon = jQuery(".searchIconHigherRes")[1];
  			var iconLeft = jQuery(icon).offset().left;
  			jQuery(".nlpSearchTextBoxContainer").offset({ left :  parseInt(iconLeft)-20});
  			
  			var searchTextLeft = jQuery(".nlpSearchTextBoxContainer").offset().left;
  			jQuery(".nlpArrowStyle").offset({ left : parseInt(searchTextLeft)+26});
  		}
  	  }
  	  //jQuery("#oops-text").hide();
  	 // jQuery("[id='FETCH_SUGGESTION']").trigger('click');
    }

  /*
   * Method to align the Search Text Box for different resolution
   */
  function updateNLPSearchAlignment(){	  
	  var reportWidth = viewport().width;	  
	  //jQuery(".nlpArrowStyle").css("display","none");
	  
	  jQuery(".nlpArrowStyle").css("display","none");
	  jQuery(".nlpSearchTextBoxContainer").removeAttr('style');
	  jQuery('.nlpSearchTextBoxContainer').removeClass('nlpSearchTextBoxContainerShow');
	  if(document.getElementById("NLP_SEARCH_CONTAINER__")!=null ){
		  document.getElementById("NLP_SEARCH_CONTAINER__").value = '';
	  }
	  if(document.getElementById("NLP_SEARCH__")!=null ){
		  document.getElementById("NLP_SEARCH__").value = '';
	  }
	  
	  if(document.getElementById('listview')!=null){
		var listView=document.getElementById('listview');
		jQuery(listView).remove();
	  }
		var listViewTemp=jQuery("[id='listview']");
		jQuery(listViewTemp).remove();
  }
  
  function updateMenuSearchAlignment(){	  
	  var reportWidth = viewport().width;	
	  jQuery(".menuSearchBx").css("display","none");
  }
  
  /*
   * Method to show and hide the Search text box for different resolution.
   */
  function closeNLPSearchBox(){
	  
	  var event = this.event;
	  var target = '';
	  
	  if(event!=null && typeof event != typeof undefined){
	  	target = this.event.target || this.event.srcElement ;
  	  }
	  
	  var isSearchIconTarget = false;
	  var isClickedInsideContainer = false;
	  var isClickedInsideContainerElement = false;
	  
	  var domMan = feba.domManipulator;
	  var SearchTextBoxContainer = jQuery(".nlpSearchTextBoxContainer");
	  
	  if(target != null && target.className != null && (target.className.indexOf("searchIconLinkLower")!== -1 || target.className.indexOf("searchIconHigherRes")!== -1)){
		  isSearchIconTarget = true;
	   }
	  if(target != null && target.className != null && target.className.indexOf("nlpSearchTextBoxContainer")!== -1 ){
		  isClickedInsideContainer = true;
	   }
	  
	  if(domMan.getMatchedElementCount(domMan.hasElementsMatching(SearchTextBoxContainer, target)) !== 0){
		  isClickedInsideContainerElement = true ;
	  }
	  
	  if(!isSearchIconTarget && !isClickedInsideContainer && !isClickedInsideContainerElement){
		  jQuery(".nlpArrowStyle").css("display","none");
		  jQuery(".nlpSearchTextBoxContainer").removeAttr('style');
		  jQuery('.nlpSearchTextBoxContainer').removeClass('nlpSearchTextBoxContainerShow');
	  }
	 /// jQuery("input[value ='Submit']").removeAttr("id");
	 // jQuery("input[value ='Submit']").css("display","none");	  
	 // jQuery("<input type=\"Submit\" name=\"VALIDATE_BIOMETRIC_AUTH\" class=\"waves-button-input\" value=\"Submit\" id=\"VALIDATE_BIOMETRIC_AUTH\" data-dontblockui=\"true\">").insertAfter(jQuery("input[value ='Submit']"));
	  
  }
