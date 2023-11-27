---
layout: page
title: Non-adiabatic dynamics
description:  Developing mixed-quantum classical methods for complex-valued Hamiltonians.
img: assets/img/project1.png
importance: 1
category: work
related_publications: xuezhi_perspective, xuezhi_stcrossing, yanze_pssh, xuezhi_pssh
---


The Fewest-Switches Surface Hopping (FSSH) algorithm is one of the most popular approaches for simulating non-adiabatic dynamics, where one propagates classical trajectories on a single electronic energy surface and integrates the electronic Schrodinger equation for each trajectory. Trajectories are allowed hop to other surfaces stochastically based on their associated quantum amplitudes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/wp.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/fssh1d.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption"> 
    Mixed-quantum classical FSSH dynamics (right) mimicking quantum wavepacket dynamics (left).
</div>

According to the standard FSSH algorithm, after a hop, trajectory's momentum needs to be rescaled along the direction of non-adiabatic coupling to conserve the total energy. 
However, when spin-related couplings (e.g., spin-orbit coupling, magnetic fields, ...) are taken into account, the electronic Hamiltonian will become complex-valued. The resulting complex-valued electronic wavefunctions and non-adiabatic couplings will cause a "gauge" problem for FSSH -- one cannot rescale momentum along a complex-valued direction. 
We have recently developed a phase-space surface hopping (PSSH) algorithm that overcomes the gauge problem and shows much better results comparing to the standard FSSH in model systems. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pssh.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   The PSSH algorithm outperforms FSSH in a singlet-triplet intersystem crossing model Hamiltonian. 
</div>

The basic idea of PSSH is to first find an optimal pre-conditioned basis and diagonalize the total Hamiltonian (nuclear + electronic) under that basis. The energy eigensurface and eigenfunctions will depend on both nuclear position and momentum. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pssh_toc.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Using the phase-space method, we can prove that there has no gauge problem (or in anothe word, PSSH can capture the off-diagonal nuclear Berry curvature effects.)
</div>