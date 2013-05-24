function FindProxyForURL(url, host) {
   if (
        shExpMatch(url,"*diigo.com*") ||
        shExpMatch(host,"*readability.com*") ||
        shExpMatch(host,"*golang*") ||
        shExpMatch(host,"*amazon.com*") ||
        shExpMatch(host,"*rapidgator*") ||
        shExpMatch(url,"*mitbbs.com*") ||
        shExpMatch(host,"*.pandora.*") ||
        shExpMatch(url,"*.blogspot.com*") ||
        shExpMatch(host,"*.wordpress.com*") ||
        shExpMatch(host,"*.android.com*") ||
        shExpMatch(host,"*.ly") ||
        shExpMatch(host,"j.mp") ||
        shExpMatch(host,"t.co") ||
        shExpMatch(host,"*mefans.com") ||
        shExpMatch(host,"*bitbucket") ||
        shExpMatch(host,"*.appspot.com") ||
        shExpMatch(host,"*.skype.com*") ||
        shExpMatch(host,"*t.co") ||
        shExpMatch(host,"*.fbcdn.net*") ||
        shExpMatch(host,"*google*") ||
        shExpMatch(host,"*dropbox*") ||
        shExpMatch(host,"*github*") ||
        shExpMatch(host,"*yfrog.com*") ||
        shExpMatch(host,"*imdb.com*") ||
        shExpMatch(host,"stackoverflow.com") ||
        shExpMatch(url,"*.youtube.com*") ||
        shExpMatch(url,"*.ytimg.com*") ||
        shExpMatch(host,"*facebook*") ||
        shExpMatch(host,"*twitter*") ||
        shExpMatch(url,"*eclipse*") ||
        shExpMatch(url,"*flickr*") ||
        shExpMatch(url,"*.bullogger.com*")
      ) 
   {
        return "HTTP sg.myalert.info:56789";
   }
   
   //return "HTTP localhost:8888";

   return "DIRECT";
}
