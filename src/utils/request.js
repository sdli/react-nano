const requestType = ['post','get'];

const getJsonData = function(url,obj,succ,fail){
    const type = getType(obj);
    const data = getData(obj);
    if(typeof url === 'undefined' || url == '') throw new TypeError('链接不可为空');
    const req = httpRequest();
    req.open(type,url,true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
    req.onreadystatechange = function(){
        if (req.readyState === 4){
            succ(req.responseText);
        }
    }
    req.send(obj.body);
}

const getType = function(obj){
    if(typeof obj === 'undefined' || obj == null || typeof obj.method === 'undefined' || obj.method.indexOf(requestType,1) >= 0){
        throw new TypeError('请求方法未定义或不合法！');
    }else{
        return obj.method
    }
}

const getData = function(obj){
    return obj.json || null;
}

const httpRequest = function(){
    if(typeof(XMLHttpRequest)==="undefined" && window.ActiveXObject){
        var xmlhttp_arr=["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
        var xmlhttp;
        for(i=0;i<xmlhttp_arr.length;i++){
            if(xmlhttp=new ActiveXObject(xmlhttp_arr[i]))
            break;
        }
        return xmlhttp;
    }else{
        return new XMLHttpRequest;
    }
}

export default getJsonData;
