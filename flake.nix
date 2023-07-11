{
  description = "A simple Java project with a NixOS development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/23.05";

    # "Driver" for WSL2 (normally under "nix-community/NixOS-WSL", but we have
    # a pending PR which enables systemD)
    nixos-wsl.url = "github:htngr/NixOS-WSL";
    # Use our revision of nixpkgs
    nixos-wsl.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs@{ nixpkgs, ... }: {

    # Our NixOS environment without specific drivers
    nixosModules.myEnv = ./configuration.nix;

    # Our NixOS environment as a WSL2 instance
    nixosConfigurations.myWSL = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = { inherit inputs; };
      modules = [ ./wsl.nix ];
    };

  };
}
