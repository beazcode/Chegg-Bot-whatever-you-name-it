
    chrome.runtime.onMessage.addListener(function(req, sender,sendResponse){
        if(req.todo=="bodytocontent"){
            location.replace(req.msg)
        }
    });
    window.onload=function(){
    
        const inner_html =  $('.question-body-text')[0].innerHTML;
        const inner_html2 =  $('.answer-body')[0].innerHTML;
        
        chrome.runtime.sendMessage({todo:"send", msg:(inner_html+'\n'+ inner_html2)});
        console.log((inner_html+'\n'+ inner_html2))
    }
    
    