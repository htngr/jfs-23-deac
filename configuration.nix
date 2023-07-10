{ pkgs, ... }: {

  imports = [
    # ./bobs-configuration.nix
  ];

  programs.java.enable = true;
  programs.java.package = pkgs.jdk11;

  environment.systemPackages = [
    pkgs.jetbrains.idea-community
  ];


  # Enable nix flakes
  nix.extraOptions = ''
    experimental-features = nix-command flakes
  '';
}
