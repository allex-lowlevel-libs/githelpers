function createGitHelpers (){
  'use strict';

  var GITURL_REGEXP = /(((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/)?))?([\w\.@\:\/\-~]+)(\.git)?(\/)?/;


  ///TODO: most probably this should be written bit more decomposed since we get false recognition even on simple URLs like htts://bla.truc.com ... mind the usecases in test file, this will suffice for now ...

  function isGitURL (string){
    return !!string.match (GITURL_REGEXP);
  }

  return {
    isGitURL : isGitURL,
  };
}


module.exports = createGitHelpers;
