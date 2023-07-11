{

  programs.neovim.enable = true;

  programs.git = {
    enable = true;
    config.user = {
      name = "bob";
      email = "bob@email.de";
    };
  };

}
