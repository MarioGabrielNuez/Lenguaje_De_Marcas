<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : xslSheet.xsl
    Created on : 11 de mayo de 2022, 13:06
    Author     : Mario Gabriel Núñez Alcázar de Velasco
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:variable name="nom" select="name(//nombre)"/>
    <xsl:variable name="correoE" select="name(//correo)"/>
    
    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/ifp">
        <html>
            <head>
                <title>xslSheet.xsl</title>
            </head>
            <body>
                <h1>Autor</h1>
                <table border="1">
                    <tr>
                        <th><xsl:value-of select="$nom" /></th>
                        <th>Apellidos</th>
                        <th><xsl:value-of select="$correoE" /></th>
                    </tr>
                    <tr>
                        <xsl:for-each select="./autor">
                            <td><xsl:value-of select="./nombre" /></td>
                            <td><xsl:value-of select="./apellidos" /></td>
                            <td><xsl:value-of select="./correo" /></td>
                        </xsl:for-each>
                    </tr>
                </table>
                <table border="1">
                    <tr>
                        <th><h1>Ciclo: <xsl:value-of select="./modulos/@ciclo"/></h1></th>
                    </tr>
                    <tr>
                        <th><h2>Cursos: </h2></th>
                    </tr>
                    <xsl:for-each select="./modulos/curso">
                        <tr>
                            <th><h3><xsl:value-of select="./@nombre" /></h3></th>
                        </tr>
                        <tr>
                            <td>
                                <table border="1">
                                    <tr>
                                        <th>Modulo</th>
                                        <th>Profesor</th>
                                        <th>Contenido</th>
                                    </tr>
                                    <xsl:for-each select="./modulo">
                                        <xsl:sort select="./@id" data-type="number" order="descending" />
                                        <xsl:if test="./@id > '0'">  
                                            <xsl:choose>
                                                <xsl:when test="./@id mod 2 = 0">
                                                    <tr bgcolor="#fffffff">
                                                        <td><xsl:value-of select="./@nombre" /></td>
                                                        <td><xsl:value-of select="./@profesor" /></td>
                                                        <td><xsl:value-of select="./@tecnologias" /></td>
                                                    </tr>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <tr bgcolor="#aaaaaaa">
                                                        <td><xsl:value-of select="./@nombre" /></td>
                                                        <td><xsl:value-of select="./@profesor" /></td>
                                                        <td><xsl:value-of select="./@tecnologias" /></td>
                                                    </tr>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:if>
                                    </xsl:for-each>
                                </table>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h1>Profesores</h1>
                <xsl:for-each select="./profesores/profesor">
                    <xsl:sort select="./@id" data-type="number" order="descending" />
                    <xsl:if test="./@id > '0'">
                        <h2><xsl:value-of select="$nom" />: <xsl:value-of select="./nombre" /></h2>
                        <h2><xsl:value-of select="$correoE" />: <xsl:value-of select="./correo" /></h2>
                        <table border="1">
                            <tr><th><h2>Materias</h2></th></tr>
                            <xsl:for-each select="./materia" >
                                <xsl:sort select="." data-type="text" order="ascending" />
                                <tr><td><xsl:value-of select = "."/></td></tr>
                            </xsl:for-each>
                        </table>
                    </xsl:if>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
