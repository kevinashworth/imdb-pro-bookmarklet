The bookmarklet:
javascript:h=location.href;i=h.indexOf(%22imdb.com%22);p=h.indexOf(%22http://pro.imdb.com%22);t=h.indexOf(%22title%22);c=h.indexOf(%22combined%22);if((t>1)&&(c>1)){u=h.substring(0,c)};if(i==-1){window.location=%22http://pro.imdb.com/name/nm2825198/%22};if(p==-1){window.location=u.replace(/http:\/\/[a-z]+/,%22http://pro%22)};




The bookmarklet with line breaks and unencoded:
javascript:
h=location.href;
i=h.indexOf("imdb.com");
p=h.indexOf("http://pro.imdb.com");
t=h.indexOf("title");
c=h.indexOf("combined");
if((t>1)&&(c>1)){u=h.substring(0,c)};
if(i==-1){window.location="http://pro.imdb.com/name/nm2825198/"};
if(p==-1){window.location=u.replace(/http:\/\/[a-z]+/,"http://pro")};
