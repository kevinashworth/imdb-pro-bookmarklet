/* Updating 2020-03-12
 * The bookmarklet with line breaks and unencoded:
 */

h = location.href;

i = h.indexOf('imdb.com');
p = h.indexOf('https://pro.imdb.com');

t = h.indexOf('title');

c = h.indexOf('combined');
f = h.indexOf('fullcredits');
r = h.indexOf('reference');
badword = Math.max(c,f,r);

if (i==-1) {
  window.location='https://pro.imdb.com/name/nm2825198/'
}
else if (p==0) {
  window.location=h.replace('https://pro','https://www')
}
else if (p==-1){
  if ((t > 1) && (badword > 1)) {
    h=h.substring(0, badword)
  }
  window.location=h.replace(/https:\/\/[a-z]+/,'https://pro');
};


/* The bookmarklet after processing with a perl gist from
 * http://daringfireball.net/linked/2014/01/27/javascript-bookmarklet-builder-update :
 */

javascript:h=location.href;i=h.indexOf(%27imdb.com%27);p=h.indexOf(%27https://pro.imdb.com%27);t=h.indexOf(%27title%27);c=h.indexOf(%27combined%27);f=h.indexOf(%27fullcredits%27);r=h.indexOf(%27reference%27);badword=Math.max(c,f,r);if(i==-1)%20{window.location=%27https://pro.imdb.com/name/nm2825198/%27}else%20if(p==0)%20{window.location=h.replace(%27https://pro%27,%27https://www%27)}else%20if(p==-1){if((t>1)&&(badword>1)){h=h.substring(0,badword)}window.location=h.replace(/https:\/\/[a-z]+/,%27https://pro%27);};
