import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Fragment } from "react";

export const PokemonDetails = (props) => {
  const details = props.details;

  return (
    <Fragment>
      <Dialog onClose={() => props.closeDialog()} open={props.open}>
        <DialogTitle onClose={() => props.closeDialog()}>
          Nome: {details.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Row: {details.row}</Typography>
          <Typography gutterBottom>
            Pokedex number: {details.pokedex_number}
          </Typography>
          <Typography gutterBottom>Img name: {details.img_name}</Typography>
          <Typography gutterBottom>Generation: {details.generation}</Typography>
          <Typography gutterBottom>
            Evolution stage: {details.evolution_stage}
          </Typography>
          <Typography gutterBottom>Evolved: {details.evolved}</Typography>
          <Typography gutterBottom>FamilyID: {details.familyID}</Typography>
          <Typography gutterBottom>Cross gen: {details.cross_gen}</Typography>
          <Typography gutterBottom>Type 1: {details.type_1}</Typography>
          <Typography gutterBottom>Type 2: {details.type_2}</Typography>
          <Typography gutterBottom>Weather 1: {details.weather_1}</Typography>
          <Typography gutterBottom>Weather 2: {details.weather_2}</Typography>
          <Typography gutterBottom>Stat total: {details.stat_total}</Typography>
          <Typography gutterBottom>Atk: {details.atk}</Typography>
          <Typography gutterBottom>Def: {details.def}</Typography>
          <Typography gutterBottom>Sta: {details.sta}</Typography>
          <Typography gutterBottom>Legendaryr: {details.legendary}</Typography>
          <Typography gutterBottom>Aquireable: {details.aquireable}</Typography>
          <Typography gutterBottom>Spawns: {details.spawns}</Typography>
          <Typography gutterBottom>Regional: {details.regional}</Typography>
          <Typography gutterBottom>Raidable: {details.raidable}</Typography>
          <Typography gutterBottom>Hatchable: {details.hatchable}</Typography>
          <Typography gutterBottom>Shiny: {details.shiny}</Typography>
          <Typography gutterBottom>Nest: {details.nest}</Typography>
          <Typography gutterBottom>
            Not gettable: {details.not_gettable}
          </Typography>
          <Typography gutterBottom>
            Future evolve: {details.future_evolve}
          </Typography>
          <Typography gutterBottom>
            Combat power 100 40: {details.combat_power_100_40}
          </Typography>
          <Typography gutterBottom>
            Combat power 100 : {details.combat_power_100_}
          </Typography>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
