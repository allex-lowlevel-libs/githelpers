var expect = require('chai').expect,
  lib = require('..')();

describe ('isGitURL test', function () {
  it ('Test some sample strings', function () {
    var strings = [
      'git@github.com:user/project.git',
      'https://github.com/user/project.git',
      'http://github.com/user/project.git',
      'git@192.168.101.127:user/project.git',
      'https://192.168.101.127/user/project.git',
      'http://192.168.101.127/user/project.git',
      'ssh://user@host.xz:port/path/to/repo.git/',
      'ssh://user@host.xz/path/to/repo.git/',
      'ssh://host.xz:port/path/to/repo.git/',
      'ssh://host.xz/path/to/repo.git/',
      'ssh://user@host.xz/path/to/repo.git/',
      'ssh://host.xz/path/to/repo.git/',
      'ssh://user@host.xz/~user/path/to/repo.git/',
      'ssh://host.xz/~user/path/to/repo.git/',
      'ssh://user@host.xz/~/path/to/repo.git',
      'ssh://host.xz/~/path/to/repo.git',
      'git://host.xz/path/to/repo.git/',
      'git://host.xz/~user/path/to/repo.git/',
      'http://host.xz/path/to/repo.git/',
      'https://host.xz/path/to/repo.git/',
      '/path/to/repo.git/',
      'path/to/repo.git/',
      '~/path/to/repo.git',
      'file:///path/to/repo.git/',
      'file://~/path/to/repo.git/',
      'user@host.xz:/path/to/repo.git/',
      'host.xz:/path/to/repo.git/',
      'user@host.xz:~user/path/to/repo.git/',
      'host.xz:~user/path/to/repo.git/',
      'user@host.xz:path/to/repo.git',
      'host.xz:path/to/repo.git',
      'rsync://host.xz/path/to/repo.git/'
    ],
    result = null;

    for (var i in strings) {
      result = lib.isGitURL(strings[i]);
      if (!result){
        throw new Error('String '+strings[i]+' is not a git URL');
      }
    };
  });
});
