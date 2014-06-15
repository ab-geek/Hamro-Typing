 function WriteToFile(f) {
			
		f = f.elements;  //  reduce overhead
 var w = window.frames.w;
 if( !w ) {
  w = document.createElement( 'iframe' );
  w.id = 'w';
  w.style.display = 'none';
  document.body.insertBefore( w, null );
  w = window.frames.w;
  if( !w ) {
   w = window.open( '', '_temp', 'width=100,height=100' );
   if( !w ) {
    window.alert( 'Sorry, the file could not be created.' ); return false;
   }
  }
 }
 var d = w.document,
  ext = f.ext.options[f.ext.selectedIndex],
  name = f.filename.value.replace( /\//g, '\\' ) + ext.text;
 d.open( 'text/plain', 'replace' );
 d.charset = ext.value;
 if( ext.text==='.txt' ) {
  d.write( f.txt.value );
  d.close();
 } else {  //  '.html'
  d.close();
  d.body.innerHTML = '\r\n' + f.txt.value + '\r\n';
    
}

}
