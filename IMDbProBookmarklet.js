The bookmarklet:
javascript:h=location.href;i=h.indexOf(%27imdb.com%27);p=h.indexOf(%27http://pro.imdb.com%27);t=h.indexOf(%27title%27);c=h.indexOf(%27combined%27);f=h.indexOf(%27fullcredits%27);if(i==-1){window.location=%27http://pro.imdb.com/name/nm2825198/%27}else%20if(p==0){window.location=h.replace(%27http://pro%27,%27http://www%27)}else%20if(p==-1){if((t>1)&&(c>1)){h=h.substring(0,c)}else%20if((t>1)&&(f>1)){h=h.substring(0,f+11)};window.location=h.replace(/http:\/\/[a-z]+/,%27http://pro%27);};


The bookmarklet with line breaks and unencoded:

h=location.href;
i=h.indexOf('imdb.com');
p=h.indexOf('http://pro.imdb.com');
t=h.indexOf('title');
c=h.indexOf('combined');
f=h.indexOf('fullcredits');
if(i==-1){
  window.location='http://pro.imdb.com/name/nm2825198/'
}
else if(p==0){
  window.location=h.replace('http://pro','http://www')
}
else if(p==-1){
  if((t>1)&&(c>1)){
    h=h.substring(0,c)
  }
  else if((t>1)&&(f>1)){
    h=h.substring(0,f+11)
  };
  window.location=h.replace(/http:\/\/[a-z]+/,'http://pro');
};
