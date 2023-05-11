import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ICard } from "../../common";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export type ModalProps = {
  open: boolean | false;
  modalData: ICard;
  closeModal: () => void;
};

const ModalComponent = ({ open, modalData, closeModal }: ModalProps) => {
  return (
    <div>
      <Dialog open={open} onClose={closeModal}>
        <DialogTitle>{modalData?.title}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} className="mt-2">
            
            <Grid xs={7}>
              <img src={modalData?.imagePath} loading="lazy" className="rounded-lg"/>
            </Grid>

            <Grid xs={5}>
              <div className="mx-5 mt-0 container">
                <TextField
                  size="small"
                  disabled
                  id="outlined-disabled"
                  label="CBU(BBVA)"
                  defaultValue="0170471020000000080606"
                  className="mt-0"
                />
                <TextField
                  size="small"
                  disabled
                  id="outlined-disabled"
                  label="Mercado Pago (Envío de dinero)"
                  defaultValue="danielpunazzo.mp"
                  className="mt-5"
                />
                <TextField
                  size="small"
                  disabled
                  id="outlined-disabled"
                  label="Nombre"
                  defaultValue="Daniel Felipe Punazzo "
                  className="mt-5"
                />
                <TextField
                  size="small"
                  disabled
                  id="outlined-disabled"
                  label="Email"
                  defaultValue="comercial@vitalzeo.com.ar"
                  className="mt-5"
                />
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalComponent;
